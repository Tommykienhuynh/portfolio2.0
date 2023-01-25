import React from 'react'

import ProjectCards from "../homepage/projects"
import HeadShot from "../../assets/ProfilePicture4.png"

export default function header() {
    return (
        <div className='flex flex-col w-full justify-center items-center '>
        <div className="flex flex-col w-full justify-center items-center pt-5 w-full max-w-2xl  sm:flex-row-reverse justify-between items-center  ">
        <div className="profileContainer  rounded justify-center ">
            <div class="rounded-full h-32 w-32 flex  mb-10 sm:h-28 w-28 "> 
            <img src={HeadShot} />
            </div>
            </div>
            <div className="flex flex-col w-full justify-center  "> 
                <h1 className="font-cyber text-primaryBlue tracking-wide font-bold text-3xl"> Tommy Huynh </h1>
                <h4 className="font-main text-primaryPurple text-lg font-thin mb-1 italic"> 
                    Front-End-Developer 
                </h4>
            </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center pt-5 w-full max-w-2xl  sm:flex-col justify-between items-center "> 
            <p className="font-main text-white max-w-2xl sm:self-start "> 
             Hello,  I am an aspiring web developer that is living in San Jose, California. I loved the process of making websites from beginning to end.  
            </p>
            <h3 className="font-cyber text-primaryPurple text-lg self-start font-thin italic max-w-2xl mt-5">Skills </h3>
            <p className="font-main text-white max-w-2xl sm:self-start"> React.JS, SASS, Tailwind, Node.JS, Express, Mysql, Python, Javascript</p>
        </div>
        <ProjectCards />
        </div>
    )
}
