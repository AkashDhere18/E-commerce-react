import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="comp-panel" id="panel-footer">
            <span className="comp-label">Component: &lt;Footer /&gt;</span>
            <footer className="site-footer">
                <div className="footer-top">
                    <div>
                        <div className="footer-brand-logo">DRA<span>PE</span></div>
                        <p className="footer-tagline">Style that speaks softly & stays long. Thoughtfully crafted for everyday elegance.</p>
                        <div className="footer-newsletter-bar">
                            <div className="nl-inner">
                                <span>Get <strong>early access</strong> to new drops & exclusive offers</span>
                                <div className="nl-form">
                                    <input className="nl-in" type="email" placeholder="your@email.com" />
                                    <button className="nl-go">Join</button>
                                </div>
                            </div>
                        </div>
                        <div className="footer-socials">
                            <a className="social-btn" href="#"><i className="bi bi-instagram"></i></a>
                            <a className="social-btn" href="#"><i className="bi bi-pinterest"></i></a>
                            <a className="social-btn" href="#"><i className="bi bi-facebook"></i></a>
                            <a className="social-btn" href="#"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <div>
                        <p className="footer-col-title">Shop</p>
                        <ul className="footer-links">
                            <li><a href="#">New Arrivals</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sale</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer-col-title">Help</p>
                        <ul className="footer-links">
                            <li><a href="#">Size Guide</a></li>
                            <li><a href="#">Track Order</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer-col-title">Company</p>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Sustainability</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span className="footer-copy">© 2025 DRAPE. All rights reserved.</span>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer