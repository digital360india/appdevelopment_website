import React from 'react';

export default function Aboutdetails() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center  lg:py-[120px]'>
      {/* first col */}
      <div className='first lg:mr-8 w-full lg:w-[532px] space-y-2 '>
        <h1 className='text-[#13375D] xl:text-[48px] lg:text-[40px] text-[28px] font-semibold '>A solid track record in Designing complex App and Websites</h1>
        <div className='text-[14px] md:text-[18px] space-y-4'>
          <p>Lorem ipsum dolor sit amet consectetur. Vel non vestibulum fames facilisis. Odio volutpat phasellus dolor neque id ullamcorper sollicitudin. Lorem tincidunt velit amet neque auctor. Quam nulla tortor nibh vitae aliquet venenatis eu iaculis. Non tortor placerat facilisis sit duis posuere urna velit. Non risus arcu accumsan nam lobortis risus varius nunc. Mauris ac risus sodales pretium vitae placerat faucibus pharetra purus. Augue in vel lacinia est dolor sit. Curabitur sed odio magna ut.</p>
          <p>Lorem ipsum dolor sit amet consectetur. Vel non vestibulum fames facilisis. Odio volutpat phasellus dolor neque id ullamcorper sollicitudin. Lorem tincidunt velit amet neque auctor. Quam nulla tortor nibh vitae aliquet venenatis eu iaculis. Non tortor placerat facilisis sit duis posuere urna velit. Non risus arcu accumsan nam lobortis risus varius nunc. Mauris ac risus sodales pretium vitae placerat faucibus pharetra purus. Augue in vel lacinia est dolor sit. Curabitur sed odio magna ut.</p>
        </div>
      </div>

{/* second col */}
      <div className='secend  space-y-6 lg:w-[552px] lg:px-[60px] lg:h-[950px] lg:mt-0 md:h-[800px] md:w-[450px] md:ml-[80px] md:px-[40px] mt-8  rounded-lg bg-[#4B698D]  px-[24px]  pt-[60px] h-[720px] w-full '>
       
        <div className='2st'>
          <p className='text-white bg-white h-1 w-[75px] '></p>
          <p className='lg:text-[74px] md:text-[64px] text-[56px] -ml-2 text-white'>150+</p>
          <p className='lg:text-[14px] lg:w-[352px] md:[11px] md:w-[300px] w-[220px] text-[9px] text-[#E1E3E2] '>Asset Management companies and Investment Firms advised (members of France Invest and AFG)</p>
        </div>
        <div className='3st'>
          <p className='text-white bg-white h-1 w-[75px] '></p>
          <p className='lg:text-[74px] md:text-[64px] text-[56px] -ml-2 text-white'>550+</p>
          <p className='lg:text-[14px] lg:w-[352px] md:[11px] md:w-[300px] w-[220px] text-[9px] text-[#E1E3E2] '>Portfolio companies and growth companies advised</p>
        </div>
        <div className='4st'>
          <p className='text-white bg-white h-1 w-[75px] '></p>
          <p className='lg:text-[74px] md:text-[64px] text-[56px] -ml-2 text-white'>150+</p>
          <p className='lg:text-[14px] lg:w-[352px] md:[11px] md:w-[300px] w-[220px] text-[9px] text-[#E1E3E2] '>Claims managed (all covers and sectors included)</p>
        </div>
        <div className='5st'>
          <p className='text-white bg-white h-1 w-[75px] '></p>
          <p className='lg:text-[74px] md:text-[64px] text-[56px] -ml-2 text-white'>300+</p>
          <p className='lg:text-[14px] lg:w-[352px] md:[11px] md:w-[300px] w-[220px] text-[9px] text-[#E1E3E2] '>Funds Covered</p>
        </div>
        <div className='1st'>
          <p className='text-white bg-white h-1 w-[75px] '></p>
          <p className='lg:text-[74px] md:text-[64px] text-[56px] -ml-2 text-white'>1000+</p>
          <p className='lg:text-[14px] lg:w-[332px] md:[11px] md:w-[300px] w-[220px] text-[9px] text-[#E1E3E2] '>Corporate offices covered in Europe and beyond</p>
        </div>
      </div>
    </div>
  );
}
