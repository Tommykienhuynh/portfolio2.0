import {useState} from 'react'


export default function NavPopUP({setIsPopUp, size}) {
  const [isSize, setSize] = useState(size.width);

  let exitPopUp = () => {
  setIsPopUp(false);
}

  if(size.width > 480)
  {
    exitPopUp();
  }



  return (
    <div className='h-screen flex flex-col  items-center  bg-backgroundTrans   '>
      <small className='text-primaryPurple self-end text-7xl '
            onClick={exitPopUp}> X </small>
        <ul className='text-primaryBlue h-full text-4xl mt-28 '>
            <li className='mt-8'> Blog </li>
            <li className='mt-8'> Resume </li>
            <li className='mt-8' > <a href="https://github.com/Tommykienhuynh"  target="_blank" > Github </a>   </li>
            <li className='mt-8'> <a href="https://www.linkedin.com/in/tommy-kien-huynh/"  target="_blank"> Linkedin </a> </li>
        </ul>
    </div>
  )
}
