import React from 'react'
import "./homePage.css";

import Navbar from '../navbar/mobileNav';
import ProfileEyes from '../profileEyes/profileEyes';
import Header from '../homepage/headerSub';
import Projects from "../homepage/projects";
import Footer from "../footer";
import {motion} from 'framer-motion/dist/framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

import useWindowSize from "./useWindowSize";

export default function Mobile() {
  let size = useWindowSize();

  return (
    <div className='mainContainer h-full box-border px-4 flex flex-col justify-center  bg-backgroundColor sm:px-32 lg:items-center xl:px-56  '>
        <div className="max-h-full  lg:flex flex-col justify-center align-middle items-center xl:w-3/5">
          {/* <div className="lightBulb h-7 w-7 opacity-50 bg-yellow absolute text-center rounded-md origin-top-left cursor-pointer
                    hover:bg-opacity-70"> 
            <FontAwesomeIcon title="light mode coming soon" className="text-xl self-center mt-1 text-backgroundSecondary" icon={faLightbulb} />
          </div> */}
          <Navbar /* projects={projectContainer} */ />       
          {size.width > 600 && <ProfileEyes /> }
          <Header /> 
         {/*  <Projects  /> */}
          <Footer />
        </div>
    </div>
  )
}
