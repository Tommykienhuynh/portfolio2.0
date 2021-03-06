import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {useNavigate} from 'react-router-dom';



export default function Navbar({projects}) {

  
    const navigate = useNavigate();
    const handleClick = () => {
            navigate('/');
        };
    const routeResume = () => {
        navigate("/resume");
    }

        console.log(projects);
    let scrollToProject = () => {
        projects.current.scrollIntoView();
    }
    
 

    return (
        <nav className="flex min-w-full flex-row justify-between align-middle w-full sticky bg-backgroundTrans md:w-12  top-0 pt-5 pb-2">
                <div className="lightBulb h-7 w-7  opacity-50 bg-yellow absolute text-center rounded-md transform -translate-x-64 cursor-pointer
                    hover:bg-opacity-70 
                "> 
                    <FontAwesomeIcon title="light mode coming soon" className="text-xl self-center mt-1 text-backgroundSecondary" icon={faLightbulb} />
                </div>
                 <h1 className="font-cyber font-semibold tracking-wide   text-primaryBlue text-xl 
                 hover: cursor-pointer sm:text-left"
                 onClick={handleClick}
                 > Tommy Huynh </h1>
              {/*   <div className="nightMode"></div> */}
                <div className="inline-flex font-main text-base ">
                 {/*    <small onClick={scrollToProject} className="ml-2 font-main text-white hover:text-primaryPurple cursor-pointer"> Projects </small> */}
                    <small onClick={routeResume}  className="ml-2 font-main text-white hover:text-primaryPurple cursor-pointer"> Resume </small>
                   <a href="https://github.com/Tommykienhuynh" target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon title="Github" className="ml-5 text-2xl text-white cursor-pointer 
                        hover:text-primaryPurple
                    " icon={faGithub} /> </a>
                    <a href="https://www.linkedin.com/in/tommy-kien-huynh/" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon title="Linkedin" className="ml-5 text-2xl  text-white cursor-pointer
                        hover:text-primaryPurple
                    " icon={faLinkedin} /> 
                    </a>
                </div>
          
        </nav>
    )
}
