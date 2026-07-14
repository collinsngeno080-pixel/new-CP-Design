import { useEffect, useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useFavicon } from "@/hooks/useFavicon";
import { initFacebookPixel } from "@/lib/facebook-pixel";
import { buildCTAUrl, trackTrialClick, patchOutboundLinks } from "@/lib/tracking";
import EpHeader from "@/components/exhibitpro/EpHeader";
import EpFooter from "@/components/exhibitpro/EpFooter";
import "./exhibitpro-skin.css";
import "./exhibitpro-blog.css";

type BlogView = "blog" | "what-is-an-exhibit-label" | "how-to-label-exhibits-for-court";

function goToView(id: BlogView, setView: (v: BlogView) => void) {
    setView(id);
    window.scrollTo(0, 0);
    const hash = id === "blog" ? "" : `#${id}`;
    history.replaceState(null, "", `/exhibitpro/blog${hash}`);
}

function BlogPromo({ campaign, title, body }: { campaign: string; title: string; body: string }) {
    return (
        <div className="ep-blog-promo">
            <p className="ep-blog-promo-title">{title}</p>
            <p className="ep-blog-promo-body">{body}</p>
            <a className="ep-btn ep-btn-primary ep-btn-lg" href={buildCTAUrl(campaign)} onClick={() => trackTrialClick(campaign)}>
                Try ExhibitPro
            </a>
        </div>
    );
}

function BlogIndex({ goTo }: { goTo: (id: BlogView) => void }) {
    return (
        <div id="ep-blog-index">
            <header className="ep-blog-header">
                <p className="ep-blog-eyebrow">Blog</p>
                <h1>Exhibit labeling guides</h1>
                <p className="ep-blog-subhead">
                    Practical guidance for paralegals, legal assistants, and litigation support professionals preparing exhibits for court.
                </p>
            </header>

            <div className="ep-article-list">
                <button className="ep-article-row" onClick={() => goTo("what-is-an-exhibit-label")}>
                    <p className="ep-article-tag">Guide</p>
                    <p className="ep-article-title">What is an exhibit label?</p>
                    <p className="ep-article-excerpt">
                        A complete guide covering what exhibit labels are, why they&#8217;re used, what information they contain, and best practices for labeling.
                    </p>
                </button>
                <button className="ep-article-row" onClick={() => goTo("how-to-label-exhibits-for-court")}>
                    <p className="ep-article-tag">Guide</p>
                    <p className="ep-article-title">How to label exhibits for court</p>
                    <p className="ep-article-excerpt">
                        A practical, step by step workflow for legal professionals preparing exhibits, from numbering through final production.
                    </p>
                </button>
            </div>

            <BlogPromo
                campaign="blog_cta"
                title="Ready to put this into practice?"
                body="See how ExhibitPro fits into your exhibit preparation workflow."
            />
        </div>
    );
}

function ArticleExhibitLabel({ goTo }: { goTo: (id: BlogView) => void }) {
    return (
        <div id="ep-what-is-an-exhibit-label">
            <header className="ep-blog-header">
                <p className="ep-blog-eyebrow">Guide</p>
                <h1>What is an exhibit label? A complete guide for legal professionals</h1>
                <p className="ep-blog-lede">
                    An exhibit label is a printed identifier placed on a document, photograph, or other piece of evidence so it can be easily identified during legal proceedings.
                </p>
            </header>

            <article className="ep-blog-body">
                <p>Each label assigns a unique exhibit number or letter, helping attorneys, judges, witnesses, and court staff reference the correct document throughout a deposition, hearing, arbitration, mediation, or trial.</p>
                <p>Exhibit labels are a standard part of litigation preparation. They improve document organization, reduce confusion, and help ensure evidence can be located quickly when it&#8217;s needed most. Whether a legal team is preparing ten exhibits or several hundred, consistent exhibit labeling is an important step in presenting evidence professionally.</p>

                <h2>Why are exhibit labels used?</h2>
                <p>During litigation, hundreds of documents may be exchanged between parties and introduced as evidence. Without a consistent labeling system, identifying the correct document becomes difficult, especially during live proceedings where time is limited.</p>
                <p>Exhibit labels help legal professionals:</p>
                <ul>
                    <li>Distinguish one exhibit from another</li>
                    <li>Maintain a consistent numbering system</li>
                    <li>Reference evidence quickly during testimony</li>
                    <li>Organize trial binders and exhibit notebooks</li>
                    <li>Reduce administrative errors during trial preparation</li>
                    <li>Present evidence in a professional, consistent format</li>
                </ul>
                <p>For example, instead of referring to &#8220;the contract signed in March,&#8221; an attorney can simply ask a witness to review Plaintiff&#8217;s Exhibit 12, ensuring everyone in the courtroom is looking at the same document.</p>

                <h2>What information appears on an exhibit label?</h2>
                <p>The exact format varies between firms and jurisdictions, but most exhibit labels include some combination of the following.</p>
                <table>
                    <thead>
                        <tr><th>Element</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Exhibit number or letter</td><td>Assigns a unique identifier to the document</td></tr>
                        <tr><td>Plaintiff or defendant designation</td><td>Identifies which party introduced the exhibit</td></tr>
                        <tr><td>Case information</td><td>May include a case name or number where required</td></tr>
                        <tr><td>Blank writing area</td><td>Allows attorneys or court personnel to add notes or stamps</td></tr>
                        <tr><td>Standardized layout</td><td>Ensures every exhibit is easy to identify and read</td></tr>
                    </tbody>
                </table>
                <p>Some law firms also use colour-coded labels or custom layouts to match their internal document management procedures.</p>

                <h2>What can be labeled as an exhibit?</h2>
                <p>Almost any item introduced as evidence can receive an exhibit label. Common examples include:</p>
                <ul>
                    <li>Contracts and agreements</li>
                    <li>Emails and correspondence</li>
                    <li>Medical records</li>
                    <li>Financial statements</li>
                    <li>Business records</li>
                    <li>Photographs</li>
                    <li>Maps and diagrams</li>
                    <li>Expert reports</li>
                    <li>Text message screenshots</li>
                    <li>Social media posts</li>
                    <li>Invoices and receipts</li>
                    <li>Engineering drawings</li>
                </ul>
                <p>As litigation increasingly involves digital evidence, legal teams often label both physical documents and printed versions of electronic records.</p>

                <h2>Who uses exhibit labels?</h2>
                <p>Exhibit labels are most commonly prepared by legal professionals responsible for organizing evidence before hearings and trials, including paralegals, legal assistants, litigation support specialists, trial preparation teams, attorneys, solo practitioners, and court support staff. In many firms, preparing exhibit labels is a recurring task that becomes more demanding as the number of exhibits grows.</p>

                <h2>When are exhibit labels applied?</h2>
                <p>Exhibit labels are typically added after documents have been reviewed and organized but before final printing or electronic production. A typical workflow looks like this:</p>
                <ul>
                    <li>Collect all potential exhibits</li>
                    <li>Review and organize the documents</li>
                    <li>Assign exhibit numbers or letters</li>
                    <li>Apply exhibit labels</li>
                    <li>Verify numbering and placement</li>
                    <li>Print or produce the final exhibit set</li>
                    <li>Assemble binders or electronic exhibit files</li>
                </ul>
                <p>Applying labels too early can create unnecessary work if exhibits need to be added, removed, or renumbered later in the case.</p>

                <h2>Common types of exhibit labels</h2>
                <p>Legal teams use different labeling conventions depending on the case, court, and internal workflow.</p>

                <h3>Numeric labels</h3>
                <p>Examples: Exhibit 1, Exhibit 2, Exhibit 3. Often used in civil litigation and larger document collections.</p>

                <h3>Alphabetical labels</h3>
                <p>Examples: Exhibit A, Exhibit B, Exhibit C. Common in smaller matters or where required by local practice.</p>

                <h3>Party-specific labels</h3>
                <p>Examples: Plaintiff&#8217;s Exhibit 5, Defendant&#8217;s Exhibit C. These distinguish exhibits introduced by different parties.</p>

                <h3>Deposition exhibit labels</h3>
                <p>Many firms use separate numbering systems for deposition exhibits and trial exhibits to keep proceedings organized.</p>

                <h2>Manual exhibit labeling vs. dedicated software</h2>
                <p>Many legal teams begin by creating exhibit labels manually using word processors or PDF editing tools. While this approach can work for smaller matters, it often becomes difficult to maintain consistency as exhibit volumes increase.</p>
                <table>
                    <thead>
                        <tr><th>Manual process</th><th>Dedicated exhibit label software</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Labels formatted individually</td><td>Consistent formatting across all exhibits</td></tr>
                        <tr><td>Greater risk of duplicate numbering</td><td>Standardized numbering workflow</td></tr>
                        <tr><td>Time-consuming updates</td><td>Faster revisions and reprints</td></tr>
                        <tr><td>Repetitive formatting</td><td>Streamlined label generation</td></tr>
                        <tr><td>Higher chance of alignment issues</td><td>Designed for repeatable, accurate output</td></tr>
                    </tbody>
                </table>
                <p>The right approach depends on the size of the case, the firm&#8217;s workflow, and how frequently exhibit labels are produced.</p>

                <h2>Best practices for exhibit labeling</h2>
                <p>Experienced litigation teams follow repeatable processes rather than treating each case differently. Some widely adopted best practices include:</p>
                <ul>
                    <li>Maintain a master exhibit list</li>
                    <li>Use one numbering convention throughout the case</li>
                    <li>Place labels consistently on every document</li>
                    <li>Perform a quality review before printing</li>
                    <li>Keep version control when exhibits change</li>
                    <li>Verify labels against the final exhibit index</li>
                </ul>
                <p>These practices help reduce errors and make trial preparation more efficient.</p>

                <h2>Frequently asked questions</h2>
            </article>

            <div className="ep-faq-item">
                <p className="ep-faq-q">Is an exhibit label the same as an exhibit sticker?</p>
                <p className="ep-faq-a">Yes. The terms exhibit label and exhibit sticker are often used interchangeably to describe the printed identifier placed on evidence.</p>
            </div>
            <div className="ep-faq-item">
                <p className="ep-faq-q">Are exhibit labels required in every case?</p>
                <p className="ep-faq-a">Requirements vary depending on the court, jurisdiction, and the type of proceeding. Legal professionals should always follow applicable court rules and firm procedures.</p>
            </div>
            <div className="ep-faq-item">
                <p className="ep-faq-q">Can I make exhibit labels in Microsoft Word?</p>
                <p className="ep-faq-a">Yes. Word can be used to create exhibit labels for smaller matters, although maintaining consistent formatting becomes more challenging as the number of exhibits increases.</p>
            </div>
            <div className="ep-faq-item">
                <p className="ep-faq-q">Can electronic documents have exhibit labels?</p>
                <p className="ep-faq-a">Yes. Electronic documents are commonly assigned exhibit numbers, and printed versions may receive physical exhibit labels when required for hearings or trial.</p>
            </div>
            <div className="ep-faq-item">
                <p className="ep-faq-q">What is exhibit label software?</p>
                <p className="ep-faq-a">Exhibit label software is specialized software designed to help legal professionals create, format, and print exhibit labels consistently and efficiently as part of trial preparation.</p>
            </div>

            <BlogPromo
                campaign="blog_exhibit_label_cta"
                title="Put your exhibit preparation workflow into practice with ExhibitPro"
                body="ExhibitPro is designed to support the final production stage of exhibit preparation. Built for litigation support professionals, it helps legal teams generate and format consistent exhibit labels and copier tabs using a workflow tailored to legal document preparation."
            />

            <div className="ep-related">
                <button onClick={() => goTo("how-to-label-exhibits-for-court")}>
                    Related: How to label exhibits for court &rarr;
                </button>
            </div>
        </div>
    );
}

function ArticleHowToLabel() {
    return (
        <div id="ep-how-to-label-exhibits-for-court">
            <header className="ep-blog-header">
                <p className="ep-blog-eyebrow">Guide</p>
                <h1>How to label exhibits for court: a practical guide for legal professionals</h1>
                <p className="ep-blog-lede">
                    Labeling exhibits for court involves identifying the documents that will be used as evidence, assigning each exhibit a unique identifier, applying consistent exhibit labels, verifying the numbering against the exhibit index, and preparing the final exhibit set for the court and all parties.
                </p>
            </header>

            <article className="ep-blog-body">
                <p>A standardized workflow helps legal teams maintain consistency from document review through trial preparation.</p>

                <h2>Why this guide matters</h2>
                <p>Exhibit labeling is one of the final production steps before evidence is presented in court, yet it influences almost every stage of trial preparation.</p>
                <p>Once exhibits have been selected, attorneys, paralegals, witnesses, court reporters, and judges all rely on the same numbering system to identify documents. A clear and consistent labeling process supports efficient communication and helps ensure everyone is referencing the same exhibit throughout the proceeding.</p>
                <p>While every firm has its own internal procedures, the core workflow remains largely the same. This guide walks through that workflow step by step and shows where ExhibitPro fits naturally into the process, not by changing how legal professionals prepare exhibits, but by supporting the work they&#8217;re already doing.</p>

                <h2>How the workflow comes together in ExhibitPro</h2>
                <p>Once your exhibits have been identified, numbered, and organized, ExhibitPro helps you move from preparation to production with a workflow built specifically for litigation support. Rather than creating labels manually, ExhibitPro guides you through a simple three-step process that fits naturally into the way legal professionals already prepare exhibits.</p>
            </article>

            <div className="ep-article-step">
                <div className="ep-article-step-number">1</div>
                <div className="ep-article-step-body">
                    <h3>Select your label format</h3>
                    <p>Begin by choosing the type of labels you need for your matter. ExhibitPro supports multiple legal labeling formats, including exhibit labels and copier tabs. Each format is designed specifically for legal document production, helping maintain a consistent appearance across your trial materials.</p>
                </div>
            </div>

            <div className="ep-article-step">
                <div className="ep-article-step-number">2</div>
                <div className="ep-article-step-body">
                    <h3>Generate your labels</h3>
                    <p>After selecting your label and tabs format, enter your exhibit numbering or naming convention. ExhibitPro generates your labels and tabs using predefined templates designed for litigation workflows, ensuring consistent formatting across every exhibit in the set. Whether you&#8217;re preparing a handful of exhibits for a deposition or a larger production for trial, every label follows the same standardized layout.</p>
                </div>
            </div>

            <div className="ep-article-step">
                <div className="ep-article-step-number">3</div>
                <div className="ep-article-step-body">
                    <h3>Review and print</h3>
                    <p>Once your labels and tabs have been generated, they&#8217;re ready to print. Apply them to your exhibits, verify them against your exhibit index, and assemble your final trial materials with confidence.</p>
                </div>
            </div>

            <article className="ep-blog-body">
                <h2>Why litigation professionals choose ExhibitPro</h2>
                <p>ExhibitPro isn&#8217;t designed to change how legal professionals prepare exhibit labels and tabs. It&#8217;s designed to support the workflow they already follow.</p>
                <p>Instead of spending time formatting labels and tabs individually, litigation teams can focus on organizing evidence, preparing exhibits, and supporting attorneys, while ExhibitPro handles the consistent formatting and production of exhibit labels and copier tabs.</p>
                <p>Whether you&#8217;re preparing materials for a deposition, arbitration, hearing, or trial, ExhibitPro helps you produce professional, organized litigation materials using a workflow built specifically for legal document preparation.</p>

                <h2>Manual exhibit labeling vs. using dedicated software</h2>
                <p>Legal professionals have successfully prepared exhibit labels and tabs manually for many years. For occasional matters or smaller exhibit sets, manual preparation may be appropriate. As exhibit volumes increase, many firms adopt dedicated exhibit labels and tabs software to standardize production.</p>
                <table>
                    <thead>
                        <tr><th>Manual preparation</th><th>Using ExhibitPro</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Individual label formatting</td><td>Consistent layouts designed for exhibit labels and tabs</td></tr>
                        <tr><td>Manual numbering updates</td><td>Supports established numbering conventions</td></tr>
                        <tr><td>Separate tools for different label types</td><td>Exhibit labels and copier tabs in one workflow</td></tr>
                        <tr><td>Formatting repeated for each matter</td><td>Repeatable production process across cases</td></tr>
                    </tbody>
                </table>
                <p>The objective isn&#8217;t to change how legal teams prepare exhibits. It&#8217;s to support that process with a workflow designed specifically for litigation document production.</p>

                <h2>Best practices used by litigation support professionals</h2>
                <p>Experienced litigation teams often follow the same principles regardless of the size of the matter. These include:</p>
                <ul>
                    <li>Finalize numbering before printing labels and tabs</li>
                    <li>Keep the exhibit index current throughout preparation</li>
                    <li>Use one numbering convention for the entire matter</li>
                    <li>Apply labels consistently</li>
                    <li>Review the complete exhibit set before production</li>
                    <li>Maintain a documented workflow that can be repeated across cases</li>
                </ul>
                <p>Consistency is often what distinguishes an efficient exhibit preparation process from one that requires unnecessary revisions.</p>
            </article>

            <BlogPromo
                campaign="blog_how_to_label_cta"
                title="Try ExhibitPro"
                body="Once your exhibits have been selected, organized, and numbered, ExhibitPro helps you move into production with a workflow built specifically for litigation support. Generate consistent exhibit labels and copier tabs using layouts designed for legal professionals preparing materials for depositions, hearings, arbitrations, and trial."
            />
        </div>
    );
}

export default function ExhibitProBlog() {
    useScrollToTop();
    useFavicon("/exhibitpro-favicon.ico");

    const [view, setView] = useState<BlogView>("blog");

    const goTo = (id: BlogView) => goToView(id, setView);

    useEffect(() => {
        const hash = window.location.hash.replace("#", "") as BlogView;
        if (hash === "what-is-an-exhibit-label" || hash === "how-to-label-exhibits-for-court") {
            setView(hash);
        }

        document.title = "Blog | ExhibitPro";

        initFacebookPixel("1535532960852200");
        patchOutboundLinks();
    }, []);

    return (
        <div className="ep-page">
            <EpHeader />

            <main id="main-content">
                {view === "blog" && <BlogIndex goTo={goTo} />}
                {view === "what-is-an-exhibit-label" && <ArticleExhibitLabel goTo={goTo} />}
                {view === "how-to-label-exhibits-for-court" && <ArticleHowToLabel />}
            </main>

            <EpFooter />
        </div>
    );
}
