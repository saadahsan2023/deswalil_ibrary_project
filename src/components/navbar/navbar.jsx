import React, { useEffect, useState } from "react";
import "./nav.css";
import logo4 from "../../assets/logo4.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll"
import '../contact-wtsp//ContactUs.css';
import phone_icon from "../../assets/whatsapp.png"





const navbar = () => {

  const [sticky, setStickty] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setStickty(true) : setStickty(false)
    })
  })

  const [mobailMenu, setMobailMenu] = useState(false)
  const toggleMenu = () => {
    mobailMenu ? setMobailMenu(false) : setMobailMenu(true)



  }



  const handleContactClick = () => {
    const phoneNumber = '923153021306'; // Replace with your WhatsApp number in the format '1234567890'
    const message = 'Hello, I would like to contact you!';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, 'https://wa.me/qr/TPJYCS2IO4NHJ1');
  }




  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo4} alt="" className="logo" />
      <ul className={mobailMenu ? '' : 'hide-mobail-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
        <li><Link to='program' smooth={true} offset={-230} duration={500}>Services</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Blog</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Portfolio</Link></li>
        {/* <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li> */}

        <li> <button className="contact-us-button btn" onClick={handleContactClick}>
          Whatsapp
          <img src={phone_icon} alt="" />
        </button></li>



      </ul>



      {/* <Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link> */}

      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default navbar;
