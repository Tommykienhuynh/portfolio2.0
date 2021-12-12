import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';



export default function Card({name, desc, lang, pic, pageLink}) {


    const [hover, setHover] = useState(false);

    const navigate = useNavigate();
  
    
        const handleClick = () => {
            navigate(`/${pageLink}`);
        };

  

    return (
        <div className={ hover ? "flex flex-wrap flex-col place-items-center rounded-xl w-3/4 h-72 bg-backgroundSecondary shadow-md mb-5 border-2 border-secondaryPurple" :
        "rounded-xl w-3/4 h-72 bg-backgroundSecondary   shadow-md mb-5"
    } 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            {!hover ?
           ( <>
  <div className="cardPic   rounded-t-md bg-white w-full h-2/5">
 <img className="cardPic rounded-t-md bg-white w-full h-full align-top" src={pic}  />
              </div> 
             
          <h1 className="text-primaryBlue font-cyber mt-2 ml-4 font-bold" > {name} </h1>
          <p className="text-start  text-sm mt-5 ml-5 font-main text-white"> {desc} </p>  
          <small className="float-right  justify-self-end self-end text-xs mt-7 mr-3 font-main text-secondaryPurple"> {lang} </small>
          </> )         : (<> 
          
            <h1 className="text-primaryBlue font-cyber mt-2 ml-4 font-bold text-center mt-10" > {name} </h1>
            <p className="text-start  text-sm mt-5 ml-5 text-white font-main qtext-white"> {desc} </p>  
                <div className="projectButton w-2/3 mt-20  bg-backgroundPurple border-2 border-Secondarypurple text-secondaryPurple
                 hover:opacity-70 cursor-pointer
                ">
                      <a onClick={handleClick}>    <h1 className="text-secondaryPurple text-center font-cyber px-5 py-2 "> Learn More </h1> </a>
                </div>
          
          </>)  
            }
          
        </div>
    )
}
