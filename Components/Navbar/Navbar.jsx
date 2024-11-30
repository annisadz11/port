import React, { useState, useRef } from 'react'; 
import './Navbar.css';
import logo from '../../assets/logo.png'; // Ganti logo.svg dengan logo.png
import underline from '../../assets/nav_underline.svg';
import { Link as AnchorLink } from 'react-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    };
    const closeMenu = () => {
        menuRef.current.style.right = "-250px";
    };

    return (
        <header className='header'>
            <img src={logo} alt="Logo" className="header-logo" />
            <img src={menu_open} onClick={openMenu} alt="Menu Open" className='header-mob-open' />
            <ul ref={menuRef} className="header-menu">
                <img src={menu_close} onClick={closeMenu} alt="Menu Close" className="header-mob-close" />
                <li>
                    <AnchorLink className='anchor-link' to='home' smooth={true} offset={-70}>
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" ? <img src={underline} alt='' /> : <></>}
                </li>
                 <li>
    <AnchorLink className='anchor-link' to='skills' smooth={true} offset={-70}>
        <p onClick={() => setMenu("skills")}>Skills</p>
    </AnchorLink>
    {menu === "skills" ? <img src={underline} alt='' /> : <></>}
</li>                <li>
                    <AnchorLink className='anchor-link' to='project' smooth={true} offset={-70}>
                        <p onClick={() => setMenu("project")}>Project</p>
                    </AnchorLink>
                    {menu === "project" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' to='organization' smooth={true} offset={-70}>
                        <p onClick={() => setMenu("organization")}>Organization</p>
                    </AnchorLink>
                    {menu === "organization" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' to='work' smooth={true} offset={-70}>
                        <p onClick={() => setMenu("work")}>Work</p>
                    </AnchorLink>
                    {menu === "work" ? <img src={underline} alt='' /> : <></>}
                </li>

                <li>
                    <AnchorLink className='anchor-link' to='certification' smooth={true} offset={-70}>
                        <p onClick={() => setMenu("certification")}>Certification</p>
                    </AnchorLink>
                    {menu === "certification" ? <img src={underline} alt='' /> : <></>}
                </li>
                <li>
                    <AnchorLink className='anchor-link' to='contact' smooth={true} offset={-70}>
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" ? <img src={underline} alt='' /> : <></>}
                </li>
            </ul>
        </header>
    );
}

export default Navbar;
