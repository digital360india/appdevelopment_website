import React from 'react';

export default function Aboutdata() {
  return (
    <div className='flex flex-col lg:flex-row justify-between space-y-12 py-10 lg:space-y-24 '>
      <div className=''>
        <img className='h-[250px] md:h-[500px] lg:h-[646px]' src="about1.png" alt="" />
      </div>
      <div className='w-full lg:w-[441px] space-y-3  lg:pt-0'>
        <h1 className='text-[#13375D] lg:text-[48px] font-semibold md:text-[40px] text-[32px]'>Expert in App Development</h1>
        <div className='lgtext-[18px] md:text-[16px]  text-[14px] space-y-3'>
          <p>Many managers or representatives of Investment firms had wondered about the specific risks that could arise from raising or investing capital. Initiative & Risk Partners was created in response to their questions as far as their exposure to liability risks related to their financial transactions is concerned.</p>
          <p>Many managers or representatives of Investment firms had wondered about the specific risks that could arise from raising or investing capital. Initiative & Risk Partners was created in response to their questions as.</p>
        </div>
      </div>
    </div>
  );
}
