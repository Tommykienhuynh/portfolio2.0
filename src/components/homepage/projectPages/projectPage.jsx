import React, {useState} from 'react'
import "../../homepage/homePage.css";

import Navbar from "../../navbar/navbar";
import Carousel from 'react-elastic-carousel';
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
        
        className="mainContainer h-full w-full box-border px-4 flex flex-col justify-center bg-backgroundColor sm:px-32 lg:items-center xl:px-56 ">
           <Navbar setIsPopUp={setIsPopUp} size={size} /> 
            <div onClick="" onMouseEnter={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}  className="bg-white rounded-md w-3/4 h-48 mx-auto border-box mt-20 projectHeaderIMG
            hover:cursor-pointer">
                <h1 className={onHover ? "absolute top-1/3 left-1/2 transform -translate-x-1/2  font-main text-lg font-bold text-secondaryPurple z-40" :
                 "hidden" }> View Project  </h1> 
          <a href={web} target="_blank" rel="noopener noreferrer">      <img className="bg-backgroundTrans rounded-md w-full border-2  h-full mx-auto border-box mt-20 projectHeaderIMG
          hover:opacity-80  cursor-pointer
                " src={mainPic} />
                </a>
            </div>

            <div className="projectInfoBox flex flex-col  mt-5 ">
            <h1 className="font-cyber justify-items-start text-2xl text-primaryBlue" > {name} </h1>
            <small className="text-white mt-5 font-main mb-10 text-sm">  {desc} </small>

            <div className="linksContainer mt-1 flex flex-row ">
            <small className="mr-2 font-cyber text-base text-primaryPurple">   Languages: </small>
            <small className="text-white text-sm font-main ">  {lang} </small>
            </div>

            <div className="linksContainer mt-1 flex flex-row "> 
            <small className="mr-2 font-cyber text-base text-primaryPurple">  Github: </small>
            <small className="text-white text-sm font-main ">  <a href="www.google.com"> {git} </a>  </small>
            </div>

            <div className="linksContainer mt-1 flex flex-row "> 
            <small className="mr-2 font-cyber text-base text-primaryPurple">  Website Link: </small>
            <small className="text-white text-sm font-main ">  <a href="www.google.com"> {web} </a></small>
            </div>
            
                <Carousel className="mt-20 w-full"  /* breakPoints={breakPoints} */ >
                    <img  src={pic1} />
                    <img   src={pic2} />
                    <img   src={pic3} />
                </Carousel>
 
            </div>
        </motion.div>
    )
}
