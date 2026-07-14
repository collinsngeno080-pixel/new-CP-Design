import { Link } from "react-router-dom";

export default function EpFooter() {
    return (
        <footer className="ep-footer" id="footer">
            <div className="ep-container ep-footer-inner">
                <Link to="/exhibitpro" aria-label="ExhibitPro home">
                    <img src="/images/ep-logo.png" alt="ExhibitPro" className="ep-footer-logo" />
                </Link>
                <div className="ep-footer-body">
                    <p className="ep-footer-brand">Exhibit<span className="ep-orange">Pro</span></p>
                    <p className="ep-footer-tagline">Select. Format. Print.</p>
                    <nav className="ep-footer-links" aria-label="Footer links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className="ep-footer-sep">|</span>
                        <Link to="/terms">Terms of Service</Link>
                    </nav>
                    <p className="ep-footer-copy">© {new Date().getFullYear()} ExhibitPro. All rights reserved.</p>
                </div>
                <div className="ep-footer-social">
                    <span className="ep-footer-social-label">Follow us on</span>
                    <div className="ep-footer-social-icons">
                        <a href="https://x.com/collegeproduce" className="ep-footer-social-icon" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Twitter.png" alt="X" />
                        </a>
                        <a href="https://www.tiktok.com/@collegeproducetools?lang=en-GB" className="ep-footer-social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Tiktok.png" alt="TikTok" />
                        </a>
                        <a href="https://www.youtube.com/@CollegeProducetools" className="ep-footer-social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Youtube.png" alt="YouTube" />
                        </a>
                        <a href="https://www.reddit.com/user/CollegeProduce/" className="ep-footer-social-icon" aria-label="Reddit" target="_blank" rel="noopener noreferrer">
                            <img src="/images/Reddit.png" alt="Reddit" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
