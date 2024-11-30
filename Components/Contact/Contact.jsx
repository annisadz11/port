import React, { useRef, useEffect } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg'; 
import call_icon from '../../assets/call_icon.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Inisialisasi AOS
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "cac405a2-3853-4ca6-ad0c-142430b5ccf8");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success("Message sent successfully!"); // Menampilkan notifikasi sukses
            // Clear the input fields
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';
        } else {
            toast.error("Failed to send message!"); // Menampilkan notifikasi gagal
        }
    };

    return (
        <div id="contact" className='contact'>
            <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
            <div className="contact-title" data-aos="fade-up">
                <h1>Contact</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left" data-aos="fade-right">
                    <h1>Let's talk</h1>
                    <p>I'm currently available, so feel free to send me a message about anything that you want. You can contact me anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> 
                            <p>dzzannnisa@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+628 9637848236</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Batam, Kepulauan Riau</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right" data-aos="fade-left">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' ref={nameRef} required />
                    
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' ref={emailRef} required />
                    
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' ref={messageRef} required></textarea>
                    
                    <button type='submit' className="contact-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;