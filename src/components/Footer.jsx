import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="comp-panel" id="panel-footer">
            <footer className="site-footer">
                <div className="footer-top">
                    <div>
                        <div className="footer-brand-logo">DRA<span>PE</span></div>
                        <p className="footer-tagline">Style that speaks softly & stays long. Thoughtfully crafted for everyday elegance.</p>
                
                        
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