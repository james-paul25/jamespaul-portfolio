import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { 
  FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap,
  FaJava, FaAndroid, FaHtml5, FaCss3Alt
} from "react-icons/fa";
import { 
  DiNodejs, DiJavascript1 
} from "react-icons/di";
import { 
  SiExpress, SiMongodb, SiPostman, SiVercel, SiSpring, SiMysql, SiFirebase, SiC 
} from "react-icons/si";


const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Postman: <SiPostman/>,
        Python: <FaPython/>,
        Java: <FaJava/>,
        Android: <FaAndroid/>,
        C: <SiC/>,
        Html: <FaHtml5/>,
        Css: <FaCss3Alt/>,
        MySql: <SiMysql/>,
        Firebase: <SiFirebase/>,
        Spring: <SiSpring/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
