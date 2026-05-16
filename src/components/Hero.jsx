import React from 'react'
import "./Hero.css"
import Corousels from '../components/Corousels'

const Hero = () => {
    return (
        <>

            <div className="comp-panel" id="panel-hero">
                <div className="hero-section">
                    <div className="hero-grid">
                        <div className="hero-left">
                            <div className="hero-tag"><span>Summer Collection 2025</span></div>
                            <h1 className="hero-h1">Style That<br/>Speaks <em>Softly</em><br/>& Stays</h1>
                                <p className="hero-p">Thoughtfully crafted clothing for everyday elegance. Discover pieces that feel as good as they look.</p>
                                <div className="hero-buttons">
                                    <a href="#" className="btn-hero-primary">Shop Now</a>
                                </div>
                            </div>
                                <div className="hero-right">
                                    <div className="hero-visual">
                                        {/* <div className="hero-oval"> */}
                                            <Corousels />
                                        {/* </div> */}
                                    </div>
                                    <div className="hero-stats">
                                        <div className="h-stat"><strong>12K</strong><span>Customers</span></div>
                                        <div className="h-stat"><strong>4.9★</strong><span>Rating</span></div>
                                        <div className="h-stat"><strong>Free</strong><span>Returns</span></div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>

            </>

            )
}

            export default Hero