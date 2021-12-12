import React from 'react'
import Navbar from "../navbar/navbar";
import Resume from "../../assets/2021TommyHuynh.pdf"
import "../homepage/homePage.css";
import Footer from "../footer";
import {motion} from 'framer-motion/dist/framer-motion';

export default function resume() {
    return (
        <motion.div 
        initial={{y: 10, opacity: 0}}
            animate={{ y:0, opacity: 1}}
           transition={{duration: 0.8}}  className="  flex-col justify-center content-center  mainContainer  h-full  mx-auto box-border  justify-center  px-80 bg-backgroundColor ">
            <Navbar />
                <h1 className="font-main text-xl mt-10 justify-self-end text-center text-secondaryPurple "> Resume </h1>
                <embed 
                className="mt-5 resume pb-20"
                width="625"
                height="825"
                type="application/pdf"
                src={Resume}
                
      />    
      <Footer />
        </motion.div>
    )
}
