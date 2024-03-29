
import   {useState, useEffect, useRef}   from 'react'
import "./profileEyes.css";

import Robot from "../../assets/robot.svg";



export default function ProfileEyes()
{
    const eyeRef = useRef();
    const [position, setPosition] = useState({ x: 0, y: 0 });
    let [rotation, setRotation] = useState(0);
    let styles = {
      transform: `rotate(${rotation}deg)`,
      border: `solid 3px `
    };

    useEffect(() => {
      const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", setFromEvent);
     
  
      return () => {
        window.removeEventListener("mousemove", setFromEvent);
      };
    }, []);

    useEffect( () => {
      
       let ball = eyeBall();
       setRotation(ball);
    }, [position]);
    
    function eyeBall()  {
        let x = (eyeRef.current.getBoundingClientRect().left) + (eyeRef.current.getBoundingClientRect().width/ 2);
        let y = (eyeRef.current.getBoundingClientRect().top) + (eyeRef.current.getBoundingClientRect().height / 2);
        let radian = Math.atan2(position.x - x, position.y - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
    
        return rotation;
    }


 

    return (
        <div className="mx-auto my-12  flex flex-col items-center max-w-2xl  ">
           <div class="rounded-full h-44 w-44 flex items-center justify-center border-2 border-primaryBlue bg-backgroundBlue mb-10">
             
          {/*  <div className="eyeBox">
                    <div ref={eyeRef} style={styles} className="eye">

                    </div>
                </div>
                
                <div className="eyeBox">
                    <div ref={eyeRef}  style={styles} className="eye">
                        
                    </div>
                </div>  */}


        <div className="eyeBox absolute transform translate-x-6 -translate-y-1.5">
                    <div ref={eyeRef} style={styles} className="eye">

                    </div>
                </div>
                
                <div className="eyeBox absolute  transform -translate-x-1/3 -translate-y-1.5">
                    <div ref={eyeRef}  style={styles} className="eye">
                        
                    </div>
                </div> 


               {/*   <svg className="w-40 h-40"  width="300" height="300" viewBox="0 0 166 189" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="71.4994" y1="50.954" x2="55.5776" y2="19.9635" stroke="black" stroke-width="4"/>
<path d="M63.317 12.0834C63.317 17.6975 58.8852 22.1669 53.5179 22.1669C48.1506 22.1669 43.7188 17.6975 43.7188 12.0834C43.7188 6.46935 48.1506 2 53.5179 2C58.8852 2 63.317 6.46935 63.317 12.0834Z" fill="#FE53BB" stroke="black" stroke-width="4"/>
<line x1="91.8071" y1="53.2303" x2="115.483" y2="27.6694" stroke="black" stroke-width="4"/>
<path d="M124.254 30.0942C120.813 31.3465 117.114 29.6216 115.93 26.3698C114.747 23.1179 116.472 19.4187 119.913 18.1664C123.353 16.9141 127.053 18.639 128.236 21.8908C129.42 25.1427 127.694 28.8419 124.254 30.0942Z" fill="#FE53BB" stroke="black" stroke-width="4"/>
<rect x="2" y="78.7229" width="42.6267" height="55.2548" rx="18" fill="#9C9C9C" stroke="black" stroke-width="4"/>
<rect x="122.452" y="78.7397" width="40.684" height="55.2548" rx="18" fill="#9C9C9C" stroke="black" stroke-width="4"/>
<rect x="20.4561" y="52.0017" width="124.224" height="104.796" rx="28" fill="#9C9C9C" stroke="black" stroke-width="4"/>
<path d="M70.854 82.5682C70.854 88.7319 65.0502 94.1677 57.3118 94.1677C49.5734 94.1677 43.7695 88.7319 43.7695 82.5682C43.7695 76.4045 49.5734 70.9688 57.3118 70.9688C65.0502 70.9688 70.854 76.4045 70.854 82.5682Z" stroke="black" stroke-width="4"/>
<path d="M119.423 82.5682C119.423 88.6789 113.463 94.1677 105.395 94.1677C97.327 94.1677 91.3672 88.6789 91.3672 82.5682C91.3672 76.4575 97.327 70.9688 105.395 70.9688C113.463 70.9688 119.423 76.4575 119.423 82.5682Z" stroke="black" stroke-width="4"/>
<path d="M63.481 141.967L57.6752 115.199L74.4834 115.1L88.6395 115.213L88.6538 115.213L88.6681 115.213L104.514 115.114L102.474 128.226L100.336 141.967L63.481 141.967Z" stroke="black" stroke-width="4"/>
<rect x="59.2725" y="160.455" width="46.5909" height="26.5455" fill="#9C9C9C" stroke="black" stroke-width="4"/>
<circle   className="eye" cx="57.5" cy="82.5" r="6" fill="#2CC0C9" stroke="white"/>
<circle  className="eye" cx="106.5" cy="83.5" r="6" fill="#2CC0C9" stroke="white"/>
</svg> */}

<svg className="w-40 h-40"  width="166" height="189" viewBox="0 0 166 189" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="71.4994" y1="50.954" x2="55.5776" y2="19.9635" stroke="black" stroke-width="4"/>
<path d="M63.317 12.0834C63.317 17.6975 58.8852 22.1669 53.5179 22.1669C48.1506 22.1669 43.7188 17.6975 43.7188 12.0834C43.7188 6.46935 48.1506 2 53.5179 2C58.8852 2 63.317 6.46935 63.317 12.0834Z" fill="#FE53BB" stroke="black" stroke-width="4"/>
<line x1="91.8071" y1="53.2303" x2="115.483" y2="27.6694" stroke="black" stroke-width="4"/>
<path d="M124.254 30.0942C120.813 31.3465 117.114 29.6216 115.93 26.3698C114.747 23.1179 116.472 19.4187 119.913 18.1664C123.353 16.9141 127.053 18.639 128.236 21.8908C129.42 25.1427 127.694 28.8419 124.254 30.0942Z" fill="#FE53BB" stroke="black" stroke-width="4"/>
<rect x="2" y="78.7229" width="42.6267" height="55.2548" rx="18" fill="#9C9C9C" stroke="black" stroke-width="4"/>
<rect x="122.452" y="78.7397" width="40.684" height="55.2548" rx="18" fill="#9C9C9C" stroke="black" stroke-width="4"/>
<rect x="20.4561" y="52.0017" width="124.224" height="104.796" rx="28" fill="#9C9C9C" stroke="black" stroke-width="4"/>
<path d="M70.854 82.5682C70.854 88.7319 65.0502 94.1677 57.3118 94.1677C49.5734 94.1677 43.7695 88.7319 43.7695 82.5682C43.7695 76.4045 49.5734 70.9688 57.3118 70.9688C65.0502 70.9688 70.854 76.4045 70.854 82.5682Z" stroke="black" stroke-width="4"/>
<path d="M119.423 82.5682C119.423 88.6789 113.463 94.1677 105.395 94.1677C97.327 94.1677 91.3672 88.6789 91.3672 82.5682C91.3672 76.4575 97.327 70.9688 105.395 70.9688C113.463 70.9688 119.423 76.4575 119.423 82.5682Z" stroke="black" stroke-width="4"/>
<path d="M67.1246 149.694L62.0187 126.153L76.8032 126.066L89.4724 126.167L89.4866 126.167L89.5009 126.167L103.438 126.08L101.65 137.572L99.7639 149.694L67.1246 149.694Z" stroke="black" stroke-width="4"/>
<rect x="59.2725" y="160.455" width="46.5909" height="26.5455" fill="#9C9C9C" stroke="black" stroke-width="4"/>
<circle cx="57.5" cy="82.5" r="6" fill="#2CC0C9" stroke="black"/>
<circle cx="106.5" cy="83.5" r="6" fill="#2CC0C9" stroke="black"/>
</svg>
               </div>

             
           <div className=" text-center border-2 bg-backgroundPurple border-secondaryPurple  px-16 py-3 rounded-lg drop-shadow-lg">
               <h3 className="font-cyber font-black text-secondaryPurple"> Welcome to my portfolio! </h3>

           </div>
           
        </div>
    )
}
