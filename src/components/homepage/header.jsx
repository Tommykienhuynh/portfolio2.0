import React from 'react'

import HeadShot from "../../assets/ProfilePicture4.png"

export default function header() {
    return (
        <>
        <div className="flex justify-between w-full  ">
            <div className="flex flex-col w-full justify-center  items-start "> 
                <h1 className="font-cyber text-primaryBlue tracking-wide font-bold text-4xl"> Tommy Huynh </h1>
                <h4 className="font-main text-primaryPurple text-lg font-thin italic"> 
                    Front-End-Developer
                </h4>
            </div>
            <div className="profileContainer rounded">
            <div class="rounded-full h-32 w-32 flex items-center justify-center mb-10 "> 
            <img src={HeadShot} />
            </div>
            </div>
        </div>

        <div className="heroDesc"> 
        <p className="font-main text-white "> 
        Hello,  I am an aspiring web developer that is living in San Jose, California. I loved the process of making websites from beginning to end.  

        </p>
        </div>
        <div className="skillSec mt-10">
            <h3 className="font-cyber text-primaryPurple text-lg font-thin italic"> Skills </h3>
            <p className="font-main text-white"> React.JS, SASS, Tailwind, Node.JS, Express, Mysql, Python, Javascript</p>
        </div>
      
           
        </>
    )
}
