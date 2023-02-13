import {React, useState} from 'react'

import Navbar from "../navbar/navbar";
import Img from "../../assets/projectImgs/ilya-pavlov-unsplash.jpg";
import useWindowSize from "../../components/homepage/useWindowSize";
import NavPopUP from '../navbar/navPopUP';


export default function Blog() {
  const [isPopUp, setIsPopUp] = useState(false);
  let size = useWindowSize();


  return (
    <section className='bg-backgroundColor mainContainer h-screen w-full box-border px-4 flex flex-col items-center justify-start'>
           {isPopUp ? <NavPopUP size={size} setIsPopUp={setIsPopUp} /> : 
          
          <div className="max-h-full  lg:flex flex-col justify-center align-middle items-center xl:w-3/5"> </div> }
          <Navbar setIsPopUp={setIsPopUp} size={size} /* projects={projectContainer} */ />      
           <img src={Img} className="w-5/6 rounded-md self-center justify-center mt-7 sm:max-h-52 max-w-52"  />
          <h1 className='mt-3 font-cyber text-2xl text-secondaryBlue mt-5'> Title </h1>
          <div className='h-0.5 w-full mt-3 bg-white sm:max-w-xl'> </div>
        <div>
            <h2 className='mt-10 font-main text-secondaryPurple text-xl'> Header 1 </h2>
            <p className='font-main text-sm mt-2 text-white'> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utdijoij. aokpok. a. 
            </p>
            <h2 className='mt-10 font-main text-secondaryPurple text-xl'> Header 1 </h2>
            <p className="font-main text-sm mt-2 text-white" > 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utdijoij. aokpok. a. 
            </p>
        </div>

    </section>
  )
}


