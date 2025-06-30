import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/fascx.png';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi there, my name is <b>James Paul B. Dacaldacal.</b> 
            I'm a <b>student developer</b> and incoming 3rd year college student pursuing <b>BSComSci in BISU Balilihan</b>. <br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            Apart from coding I love to do solving rubiks cube, you can check out some of my official solve here in <a href="https://www.worldcubeassociation.org/persons/2023DACA01 " target='_blank' rel="noopener noreferrer">worldcubeassociation.</a>
          </p>
        </div>

        <div>
          <Tilt>
            <img className='Avatar' src={Avatar} alt="" />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Skills</h1>
      <div className='skills'>
        
        <Skills skill='C' />
        <Skills skill='Java' />
        <Skills skill='Spring' />
        <Skills skill='Mysql' />
        <Skills skill='Html' />
        <Skills skill='Css' />
        <Skills skill='Javascript' />
        <Skills skill='React' />
        <Skills skill='Android' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        
      </div>
    </>
  )
}

export default About