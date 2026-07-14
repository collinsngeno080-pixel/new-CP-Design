import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import axios from 'axios';
import cors from 'cors';
import { parse } from 'qs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(compression());

// Register AVIF mime type
express.static.mime.define({ 'image/avif': ['avif'] });
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.post('/api/send-email', async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    try {
        // Validate required fields
        if (!firstName || !lastName || !email) {
            return res.status(400).json({ success: false, error: 'Missing required fields' });
        }

        // 1. Get Access Token from Azure AD
        const tokenResponse = await axios.post(
            `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`,
            new URLSearchParams({
                client_id: process.env.AZURE_CLIENT_ID,
                client_secret: process.env.AZURE_CLIENT_SECRET,
                scope: 'https://graph.microsoft.com/.default',
                grant_type: 'client_credentials',
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        const accessToken = tokenResponse.data.access_token;

        // 2. Construct Email Data
        const internalEmailContent = `
            <h2>New Support Thread Started</h2>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <h3>Customer Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <h3>Message</h3>
            <p>${message ? message.replace(/\n/g, '<br/>') : 'No message provided.'}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #666; font-size: 12px;">
                <strong>Action Required:</strong> A thank you email has been automatically sent to the customer from support@collegeproduce.com. 
                Replies from the customer will arrive in the support@collegeproduce.com inbox. Please track and respond accordingly.
            </p>
        `;

        const thankyouEmailContent = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; color: #333; line-height: 1.6;">
                <h2 style="color: #1a7f2c;">Thank You for Contacting College Produce</h2>
                <p>Hi ${firstName},</p>
                <p>Thank you for reaching out to College Produce. We have received your inquiry and appreciate the opportunity to assist you.</p>
                <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #1a7f2c; margin: 20px 0;">
                    <p><strong>What happens next:</strong></p>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                        <li>Our support team will review your message</li>
                        <li>We'll get back to you shortly with a response or next steps</li>
                        <li>Feel free to reply to this email with any additional details</li>
                    </ul>
                </div>
                <p>If you have any urgent concerns or additional information to share, simply reply to this email and it will go directly to our support team at <strong>support@collegeproduce.com</strong>.</p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                <p>Best regards,<br/><strong>College Produce Support Team</strong></p>
                <p style="color: #999; font-size: 12px; margin-top: 20px;">
                    College Produce | Fort Myers, FL 33901<br/>
                    Phone: 239-332-3369<br/>
                    Email: support@collegeproduce.com
                </p>
            </div>
        `;

        // Send inquiry to company emails, and thank you to user
        const emailPromises = [
            // Send thread notification to info@collegeproduce.com
            axios.post(
                `https://graph.microsoft.com/v1.0/users/${process.env.GRAPH_FROM_EMAIL}/sendMail`,
                {
                    message: {
                        subject: `New Support Thread Started - ${firstName} ${lastName}`,
                        body: {
                            contentType: 'HTML',
                            content: internalEmailContent,
                        },
                        toRecipients: [
                            {
                                emailAddress: {
                                    address: 'info@collegeproduce.com',
                                },
                            },
                        ],
                    },
                    saveToSentItems: false,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            ),
            // Send thread notification to support@collegeproduce.com
            axios.post(
                `https://graph.microsoft.com/v1.0/users/${process.env.GRAPH_FROM_EMAIL}/sendMail`,
                {
                    message: {
                        subject: `New Support Thread Started - ${firstName} ${lastName}`,
                        body: {
                            contentType: 'HTML',
                            content: internalEmailContent,
                        },
                        toRecipients: [
                            {
                                emailAddress: {
                                    address: 'support@collegeproduce.com',
                                },
                            },
                        ],
                    },
                    saveToSentItems: false,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            ),
            // Send the thank-you to the customer FROM the GRAPH_FROM_EMAIL mailbox
            // (the proven sendable account). replyTo is set to support@ so the
            // customer's replies still land in the support inbox and start the
            // thread there. NOTE: support@ can receive mail but is NOT a sendable
            // mailbox — using it as the sending principal returns
            // ErrorMailboxConfiguration and 500s the request.
            axios.post(
                `https://graph.microsoft.com/v1.0/users/${process.env.GRAPH_FROM_EMAIL}/sendMail`,
                {
                    message: {
                        subject: `We've Received Your Inquiry - College Produce Support`,
                        body: {
                            contentType: 'HTML',
                            content: thankyouEmailContent,
                        },
                        toRecipients: [
                            {
                                emailAddress: {
                                    address: email,
                                },
                            },
                        ],
                        replyTo: [
                            {
                                emailAddress: {
                                    address: 'support@collegeproduce.com',
                                    name: 'College Produce Support',
                                },
                            },
                        ],
                    },
                    saveToSentItems: true,
                },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            )
        ];

        // Use allSettled so one misconfigured mailbox doesn't hide the others
        // (Graph's ErrorMailboxConfiguration doesn't say which mailbox is at fault).
        const sendLabels = [
            `notify info@ (as ${process.env.GRAPH_FROM_EMAIL})`,
            `notify support@ (as ${process.env.GRAPH_FROM_EMAIL})`,
            `thank-you to customer (as ${process.env.GRAPH_FROM_EMAIL})`,
        ];
        const results = await Promise.allSettled(emailPromises);
        const failures = results
            .map((result, i) => ({ label: sendLabels[i], result }))
            .filter((r) => r.result.status === 'rejected');

        if (failures.length > 0) {
            failures.forEach(({ label, result }) => {
                console.error(
                    `Email send failed [${label}]:`,
                    result.reason?.response?.data || result.reason?.message
                );
            });
            return res.status(500).json({
                success: false,
                error: 'Failed to send one or more emails',
                failed: failures.map((f) => f.label),
                details: process.env.NODE_ENV === 'development'
                    ? failures.map((f) => f.result.reason?.response?.data || f.result.reason?.message)
                    : undefined,
            });
        }

        res.status(200).json({ success: true, message: 'Inquiry received and thank you email sent successfully' });

    } catch (error) {
        console.error('Error sending email:', error.response?.data || error.message);
        res.status(500).json({
            success: false,
            error: 'Failed to send email',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

app.post('/api/litflow-early-access', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, error: 'Email is required' });
    }

    try {
        const tokenResponse = await axios.post(
            `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`,
            new URLSearchParams({
                client_id: process.env.AZURE_CLIENT_ID,
                client_secret: process.env.AZURE_CLIENT_SECRET,
                scope: 'https://graph.microsoft.com/.default',
                grant_type: 'client_credentials',
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );

        const accessToken = tokenResponse.data.access_token;

        const internalContent = `
            <h2>New Lit Flow Early Access Sign-Up</h2>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="color: #666; font-size: 12px; margin-top: 20px;">This person signed up for Lit Flow early access on collegeproduce.com.</p>
        `;

        const confirmationContent = `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif; color: #333; line-height: 1.6;">
                <h2 style="color: #1a7f2c;">You're on the Lit Flow list.</h2>
                <p>Thanks for signing up for early access. We'll reach out as soon as Lit Flow is ready to launch.</p>
                <p>In the meantime, if you have questions, just reply to this email.</p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                <p>— The College Produce Team</p>
                <p style="color: #999; font-size: 12px; margin-top: 20px;">
                    College Produce | Fort Myers, FL 33901<br/>
                    Email: support@collegeproduce.com
                </p>
            </div>
        `;

        await Promise.all([
            // Internal notification to info@
            axios.post(
                `https://graph.microsoft.com/v1.0/users/${process.env.GRAPH_FROM_EMAIL}/sendMail`,
                {
                    message: {
                        subject: `Lit Flow Early Access Sign-Up — ${email}`,
                        body: { contentType: 'HTML', content: internalContent },
                        toRecipients: [{ emailAddress: { address: 'info@collegeproduce.com' } }],
                    },
                    saveToSentItems: false,
                },
                { headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' } }
            ),
            // Confirmation to user from support@
            axios.post(
                `https://graph.microsoft.com/v1.0/users/${process.env.GRAPH_FROM_EMAIL}/sendMail`,
                {
                    message: {
                        subject: `You're on the Lit Flow early access list`,
                        body: { contentType: 'HTML', content: confirmationContent },
                        toRecipients: [{ emailAddress: { address: email } }],
                        replyTo: [{ emailAddress: { address: 'support@collegeproduce.com', name: 'College Produce' } }],
                    },
                    saveToSentItems: true,
                },
                { headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' } }
            ),
        ]);

        res.status(200).json({ success: true });

    } catch (error) {
        console.error('Error sending Lit Flow early access email:', error.response?.data || error.message);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Serve static frontend files with long cache for hashed assets
app.use('/assets', express.static(path.join(__dirname, '../dist/assets'), {
    maxAge: '1y',
    immutable: true,
}));
app.use(express.static(path.join(__dirname, '../dist'), {
    maxAge: '1h',
}));

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req, res) => {
    // Don't fallback for API routes
    if (!req.path.startsWith('/api/')) {
        const indexPath = path.join(__dirname, '../dist/index.html');
        res.sendFile(indexPath, (err) => {
            if (err) {
                console.error('Error serving index.html:', err.message);
                res.status(404).json({ error: 'Not found', details: err.message });
            }
        });
    }
});

app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
    console.log(`Serving static files from: ${path.join(__dirname, '../dist')}`);
});
