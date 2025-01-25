import React from 'react';
import Cards from './Cards';

const Industries = () => {
    return (
        <div className="base" id='industry'>
            <div className='container-head  p-4 md:py-12  lg:flex flex-col space-y-6  md:flex-row justify-around bg-gray-100'>
                <div className='w-full md:w-[410px]  md:mr-10 md:mt-3'>
                    <h1 className="text-[32px] md:text-6xl lg:mb-12 text-[#13375D] uppercase font-semibold lg:leading-[78px]">Industries We Serve</h1>
                </div>
                <div className='w-full lg:w-[537px]'>
                    <p className=' text-sm font-normal tracking-[-2%] md:text-2xl text-[#111111] md:leading-[30.62px]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Hic ut quasi aut rerum veniam aspernatur ea facilis debitis perspiciatis possimus quos
                        perferendis sequi ipsam, sint doloremque, soluta, reiciendis consectetur dolor?
                    </p>
                </div>
            </div>
            <Cards/>
        </div>
    );
};

export default Industries;


