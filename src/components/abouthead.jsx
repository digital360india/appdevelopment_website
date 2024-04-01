import React from 'react';

export default function Abouthead() {
  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='lg:mr-8 space-y-3'>
          <h1 className='font-medium text-[#13375D] text-[24px] md:text-[32px]'>Experience</h1>
          <p className='text-12px lg:text-[14px]'>Cumulated experience of more than 20 years in liability risk management.</p>
        </div>
        <div className='mt-6 lg:mt-0'>
          <p className='lg:text-[32px] md:text-[26px] lg:w-[625px] text-[18px]'>Extensive experience in the Private Equity and Asset Management sectors thanks to our managers and teams of experts.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full lg:w-[420px] mt-20 h-[1px] border border-[#4B698D]"></div>
      </div>
    </>
  );
}
