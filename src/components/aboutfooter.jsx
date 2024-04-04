import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Aboutfooter() {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate("/Contact")
  }
  return (
    <div className='p-4 lg:p-[93px] flex flex-col items-center space-y-4'>
      <h1 className='lg:text-[48px] lg:w-[900px] md:text-[36px]  w-full text-[24px]  text-center font-medium text-[#13375D] '>
        Our team will be delighted to diligently answer to all your questions.
      </h1>
      <p className='text-sm lg:text-[14px]'>For more details, please contact us.</p>
     <Link to={"/Contact"}> <button onClick={handleNavigate} className='flex items-center gap-2 rounded-lg border border-[#13375D] py-4 px-8'>
        Contact Us
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" className="fill-current text-[#13375D]">
          <path d="M359.873 121.377l-22.627 22.627 95.997 95.997H16v32.001h417.24l-95.994 95.994 22.627 22.627L494.498 256z"/>
        </svg>
      </button></Link>
    </div>
  );
}
