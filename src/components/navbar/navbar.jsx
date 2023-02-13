import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLightbulb, faBars } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {useNavigate, Lin} from 'react-router-dom';
import resume from '../../assets/tommyHuynhFinal.pdf';

export default function Navbar({projects, size, setIsPopUp}) {  
    const navigate = useNavigate();
    const handleClick = () => {
            navigate('/');
        };
    
    const triggerNavPopUp = () => {
        setIsPopUp(true);
    }
    
    

        console.log(projects);
    let scrollToProject = () => {
        projects.current.scrollIntoView();
    }
    return (
        <nav className="flex min-w-full flex-row justify-between align-middle w-full sticky bg-backgroundTrans md:w-12  top-0 pt-5 pb-2">
                <div className="lightBulb h-7 w-7  opacity-70 bg-yellow absolute text-center rounded-md transform -translate-x-64 cursor-not-allowed
                    hover:bg-opacity-70 
                "> 
                    <FontAwesomeIcon title="light mode coming soon" className="text-xl self-center mt-1 text-backgroundSecondary" icon={faLightbulb} />
                </div>
                 <h1 className="font-cyber font-semibold tracking-wide   text-primaryBlue text-xl 
                 hover: cursor-pointer sm:text-left"
                 onClick={handleClick}
                 > Tommy Huynh </h1>
              {/*   <div className="nightMode"></div> */}
                {size.width > 475 ? 
                     <div className="inline-flex font-main text-base ">
                     <a href={"/blog"} >
                     <small onClick={scrollToProject}  className="ml-2  font-main text-white hover:text-primaryPurple opacity-25 cursor-not-allowed"> Blog </small>
                     </a>
                         <a  href={resume} without rel="noopener noreferrer" target="_blank">
                             <small className="ml-2 font-main text-white hover:text-primaryPurple cursor-pointer"  > Resume </small>
                         </a>
                        <a href="https://github.com/Tommykienhuynh" target="_blank" rel="noopener noreferrer" > <FontAwesomeIcon title="Github" className="ml-5 text-2xl text-white cursor-pointer 
                             hover:text-primaryPurple
                         " icon={faGithub} /> </a>
                         <a href="https://www.linkedin.com/in/tommy-kien-huynh/" target="_blank" rel="noopener noreferrer" >
                         <FontAwesomeIcon title="Linkedin" className="ml-5 text-2xl  text-white cursor-pointer
                             hover:text-primaryPurple
                         " icon={faLinkedin} /> 
                         </a>
                     </div>
                     :
                     <FontAwesomeIcon title='bars' className="text-primaryPurple text-xl" onClick={triggerNavPopUp} icon={faBars} />    
            
            }

               
        </nav>
    )
}
