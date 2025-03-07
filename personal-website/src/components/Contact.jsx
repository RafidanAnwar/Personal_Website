import "../style/Contact.css";
import { FaInstagram, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Let's connect! Reach out to me through the platforms below:</p>
        <div className="contact-icons">
          <a href="https://www.instagram.com/__rafidan/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaInstagram className="icon instagram" />
            <span>__rafidan</span>
          </a>
          <a href="https://wa.me/6285705937055" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaWhatsapp className="icon whatsapp" />
            <span>Rafidan Anwar</span>
          </a>
          <a href="https://github.com/RafidanAnwar" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaGithub className="icon github" />
            <span>RafidanAnwar</span>
          </a>
          <a href="https://www.linkedin.com/in/rafidan-anwar-0910242b1/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <FaLinkedin className="icon linkedin" />
            <span>Rafidan Anwar</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
