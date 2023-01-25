import React, {useRef} from 'react'
import "./homePage.css";

import Navbar from '../navbar/navbar';
import ProfileEyes from '../profileEyes/profileEyes';
import Header from '../homepage/header';
import Projects from "../homepage/projects";
import Footer from "../footer";
import {motion} from 'framer-motion/dist/framer-motion';

export default function Homepage() {

    /* const projectContainer = useRef(); */
   // console.log(projectContainer);

  

    return (
        <div className="  mainContainer h-full  mx-auto box-border  justify-center bg-backgroundColor w-full px-80 sm:mx-96  ">
            <Navbar /* projects={projectContainer} */ />
           

            <motion.div 
  initial={{y: 10, opacity: 0}}
      animate={{ y:0, opacity: 1}}
     transition={{duration: 0.8}}   >
          <ProfileEyes />
        <Header /> 
        <Projects /* ref={projectContainer} */ />
        <Footer />
     
    
   </motion.div>
            
            
            
        </div>
    )
}
