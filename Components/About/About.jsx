import React, { useEffect } from 'react';  
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
import AOS from 'aos'; // Pastikan AOS diimport
import 'aos/dist/aos.css'; // Impor CSS AOS

const About = () => {

    useEffect(() => {
        AOS.init(); // Inisialisasi AOS
    }, []);

    return (
        <section id="about" className="about">
            <div className="container-about" data-aos="fade-up" data-aos-duration="1500">
                {/* Title Section */}
                <div className="about-title">
                    <h1>About <span>Me</span></h1>
                </div>

                {/* Deskripsi */}
                <div className="about-para">
                    <p>
                        I am a D3 Informatics Engineering graduate from Batam State Polytechnic who has experience in IT Support, 
                        as well as a strong interest in business organizers, data entry, and admin media as has been done in the BEM organization. 
                        My skills include data processing, operational management, and community development.
                    </p>
                    <p>
                        I am open to opportunities in various fields and ready to contribute effectively and build a career in the industry 
                        and continue to learn in various work environment conditions.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
