import React, {useState} from 'react'
import "../../homepage/homePage.css";

import Navbar from "../../navbar/navbar";
import Carousel from 'react-elastic-carousel';
import NavPopUP from '../../navbar/navPopUP';
import {motion} from "framer-motion/dist/framer-motion";

/* Font-Awesome Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import useWindowSize from "../useWindowSize";

export default function ProjectPage({name, desc, lang, git, web, mainPic, pic1, pic2, pic3, pic4}) {
    const [isPopUp, setIsPopUp] = useState(false);
    const [onHover, setOnHover] = useState(false);
    let size = useWindowSize();
    const carousel = React.useRef();
    /* const breakPoints= [
        {width: 400, itemsToShow: 1},
        {width: 480, itemsToShow: 2},
        {width: 820, itemsToShow: 3},
        {width: 1500, itemsToShow: 4},
      ] */

    return (
        <motion.div 
            initial={{y: 10, opacity: 0}}
            animate={{ y:0, opacity: 1}}
            transition={{duration: 0.5}}
           /*  className="mainContainer max-h-full min-h-screen w-full box-border px-4 flex flex-col justify-start bg-backgroundColor items-center" */>
            {isPopUp ? <NavPopUP size={size} setIsPopUp={setIsPopUp} /> :
            <section className='mainContainer max-h-full min-h-screen w-full box-border px-4  bg-backgroundColor flex flex-col justify-start  items-center ' > 
                <div className=' flex flex-col justify-start  items-center sm:max-w-sm md:max-w-md'>
                    <Navbar setIsPopUp={setIsPopUp} size={size} /> 
                    <img src={mainPic} className="w-5/6 rounded-md self-center justify-center mt-7 sm:max-h-52 max-w-52"/>
                    <h1 className='text-primaryBlue font-cyber text-2xl mt-5'> {name} </h1>
                    <h3 className='text-sm font-main text-secondaryPurple mt-2'> {lang} </h3>
                    <p className='text-white text-center px-5 font-main text-sm mt-7 px-2'> 
                {desc}
                    </p>
                    <div className="flex flex-row mt-10 ">
                        <button  className='rounded-lg border-4 border-primaryBlue bg-backgroundBlue text-secondaryBlue py-2 px-4 mr-3 hover:opacity-40 cursor-pointer'> <a href={web}> View Site </a> </button>
                        <button className='rounded-lg border-4 border-primaryGreen bg-backgroundGreen text-primaryGreen py-2 px-4 hover:opacity-40 cursor-pointer'> <a href={git}> Github Repo </a></button>   
                    </div>
                    <div className='h-1 w-full mt-5 mb-5 bg-backgroundSecondary sm:max-w-xl'> </div>
                    <img src={pic1} className="w-5/6 rounded-md self-center justify-center mt-7 sm:max-h-52 max-w-52"/>
                    <img src={pic2} className="w-5/6 rounded-md self-center justify-center mt-7 sm:max-h-52 max-w-52"/>
                    <img src={pic3} className="w-5/6 rounded-md self-center justify-center mt-7 sm:max-h-52 max-w-52"/>
                    <img src={pic4} className="w-5/6 rounded-md self-center justify-center mt-7 sm:max-h-52 max-w-52"/>
            </div>
            </section>
                }
        </motion.div>
    
        
    )
}
