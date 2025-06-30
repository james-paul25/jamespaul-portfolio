import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Copyright &copy; 2025 JAP</h4>
      <div className='footerLinks'>
        <a href="https://github.com/james-paul25" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href="www.linkedin.com/in/james-paul-b-dacaldacal-8843792a1" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href='mailTo:dacaldacaljamespaul@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail/></a>
        <a href='https://www.facebook.com/friyayy404' target='_blank' rel="noopener noreferrer"><FaFacebook/></a>
        <a href='https://www.instagram.com/_friyay404/' target='_blank' rel="noopener noreferrer"><FaInstagram/></a>
      </div>
    </footer>
  )
}

export default Footer