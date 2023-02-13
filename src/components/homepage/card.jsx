import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';



export default function Card({name, desc, lang, pic, pageLink}) {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
  
    const handleClick = () => {
        navigate(`/${pageLink}`);
    };
    return (
        <div className="flex flex-col justify-center  items-center mt-14" onClick={handleClick}>     
            <h1 className='text-xl text-primaryPurple font-main sm:text-base'> {name} </h1>
           {/*  <small className='text-md text-secondaryPurple font-main'> {lang} </small> */}
            {
                hover ? <div className='h-48 px-7 w-full flex flex-col justify-center items-center  bg-backgroundSecondary rounded-lg border-2 border-secondaryPurple cursor-pointer'
                onMouseEnter={() => setHover(true)}
               onMouseLeave={() => setHover(false)}
                >
                <p className='text-white text-center text-sm font-main'> {desc} </p>
                <small className='font-main justify-self-end mt-2 text-secondaryBlue'> {lang} </small>
                </div>   
                :
                <img className={hover ? "mt-5 w-full   bg-red-50 rounded-lg md:h-4/5 xl:h-5/6w-5/6 " : "mt-5 h-2/3 w-5/6 bg-red-50 rounded-lg md:h-4/5 xl:h-5/6"}  
                height={210}
                width={350}
                src={pic} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
      /> 
            }
            {/* <div className='h-2/3 p-7 w-full flex flex-col justify-center items-center  bg-backgroundSecondary rounded-md border-2 border-secondaryPurple'>
                <p className='text-white text-center text-sm font-main'> {desc} </p>
                <small className='font-main justify-self-end mt-2 text-secondaryBlue'> {lang} </small>
            </div> */}
        </div>
    )
}
