import React, { useState } from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.jpeg'; 
import { Link as AnchorLink } from 'react-scroll';

const Hero = () => {
    const [activeSection, setActiveSection] = useState("home");

    const handleScrollToAbout = () => {
        setActiveSection("about");
    };

    return (
        <div id="home" className="hero">
            {/* Profile Image */}
            <div className="hero-img">
                <img src={profile_img} alt="Profile" />
            </div>

            {/* Welcome Message */}
            <h2><span>Welcome,</span></h2>
            <h1><span>I'm Dzikra Aida Annisa</span></h1>
            <h3><span>Associate's Degree Informatics Engineering</span></h3>

            {/* Tombol More Info */}
            <AnchorLink 
                className="swipe-up" 
                to="about" 
                smooth={true} 
                onClick={handleScrollToAbout}
            >
                More Info <i className="fa-solid fa-arrow-down arrow-swipeup"></i>
            </AnchorLink>
        </div>
    );
}

export default Hero;