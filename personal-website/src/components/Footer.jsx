import "../style/Footer.css";
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Rafidan Anwar. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/__rafidan/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/6285705937055" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/RafidanAnwar" target="_blank" rel="noopener noreferrer" className="social-icon github">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/rafidan-anwar-0910242b1/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
