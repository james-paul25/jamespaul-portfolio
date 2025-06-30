import React from 'react';
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/ds.png';
import Avatar1 from '../images/fas.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>JAMES PAUL B DACALDACAL</b></h1>
          <Typed/>   
        </div>

        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
             I'm a computer science student constantly improving my coding skills—especially frontend, which I’m working hard to get better at—while already confident in building backend REST APIs. I’m determined to keep growing, and I love solving Rubik's Cubes in my spare time.<br /><br />
              I love the process of turning a raw idea into a website or a product that impacts lives.
              I want to do work that challenges me as a developer and work that I can be proud of.<br /><br />
              I am fluent in <b>C++</b>, know a bit of <b>Python</b>, and I'm working on projects in the <b>MERN</b> stack.<br />
              I plan to learn <b>Next.js</b>, <b>Three.js</b>, and <b>TypeScript</b> in the near future.<br /><br />
              Also, I love <b>coffee</b><CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar1} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home