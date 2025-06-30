import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Devansh Sahni</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/james-paul25" target='_blank'><FaGithub/></a>
        <a href="www.linkedin.com/in/james-paul-b-dacaldacal-8843792a1" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:dacaldacaljamespaul@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer