import React, {useState} from 'react'
import "../../homepage/homePage.css";

import Navbar from "../../navbar/navbar";
import Carousel from 'react-elastic-carousel';
import NavPopUP from '../../navbar/navPopUP';
import {motion} from "framer-motion/dist/framer-motion";

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
            <section className='mainContainer max-h-full min-h-screen w-full box-border px-4 flex flex-col justify-start bg-backgroundColor items-center' > 
           <Navbar setIsPopUp={setIsPopUp} size={size} /> 

          
            <img src={mainPic} className="w-5/6 rounded-md self-center justify-center mt-7 sm:max-h-52 max-w-52"/>
            <h1 className='text-primaryBlue font-cyber text-2xl mt-5'> {name} </h1>
            <div className='h-0.5 w-full mt-3 bg-backgroundSecondary sm:max-w-xl'> </div>
            <p className='text-white font-main text-base mt-3 px-2'> 
            {desc}
            </p>
            <ul className='mt-5 self-start'>
                <li className='text-white flex flex-row'> <h3 className='text-base font-main text-secondaryPurple'> Languages: </h3>  {lang} </li>
                <li className='text-white flex flex-row'> <h3 className='text-base font-main text-secondaryPurple'>  Github </h3>  </li>
                <li className='text-white flex flex-row'> <h3 className='text-base font-main text-secondaryPurple'> Website Link: </h3>  </li>
            </ul>
            
            <img src={pic2} className="w-5/6 rounded-md self-center justify-center mt-7 sm:max-h-52 max-w-52"/>

            </section>
                }
        </motion.div>
    
        
    )
}
