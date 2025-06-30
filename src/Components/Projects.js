import React from 'react';
import ProjectBox from './ProjectBox';
import ArduinoImage from '../images/ard.png';
import PeerImage from '../images/p2p.png';
import MoneaseImage from '../images/monease.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={PeerImage} projectName="PeerToPeer" />
        <ProjectBox projectPhoto={PeerImage} projectName="PeerPeer" />
        <ProjectBox projectPhoto={ArduinoImage} projectName="PPLS" />
        <ProjectBox projectPhoto={MoneaseImage} projectName="Monease" />
      </div>

    </div>
  )
}

export default Projects