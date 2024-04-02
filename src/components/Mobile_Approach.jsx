import React, { useState } from 'react';

const Mobile_Approach = () => {
    const [isVisible, setIsVisible] = useState({});

    const handleButtonClick = (index) => {
        setIsVisible(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    return (
        <div className=''>
        <div className="w-full p-4 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700">
            <h1 className='px-5 text-white font-semibold text-[32px] leading-[43px] '>OUR APPROACH</h1>

            <div className='px-3 py-5 flex flex-col gap-7'>
                <div className='card-1 relative '>
                    <img src="/flight planning photo 1.png" className={` w-[345px] h-[280px] rounded-2xl border-2   border-white border-solid ${isVisible[0] ? '' : 'grayscale'}`}
                     style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', borderTopColor: 'white', borderBottomColor: 'gray' }} />

                    <div className='absolute top-[157px] left-5 text-white '>
                        <img src="/Group 1.png" className="w-[35px] h-[35px] rounded-2xl " />
                        <h1 className='text-2xl font-semibold'>Research</h1>
                        <h3 className='text-[8px] leading-9 font-normal'> USER RESEARCH AND USER EXPERIENCE</h3>
                    </div>
                    <div className='absolute top-[260px] left-5'>
                        <button className='border text-xl text-white rounded-[100%] h-[35px] w-[35.8px]'
                            onClick={() => handleButtonClick(0)}
                        >
                            {isVisible[0] ? '-' : '+'}
                        </button>
                    </div>

                    {isVisible[0] && (
                        <div className='text-white pt-6 sm:w-[100%] md:w-[40vw]'>
                            <p className='text-sm text-left md:w-[100%] lg:w-[40vw]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus, officiis
                                reprehenderit corporis
                                totam eum numquam magni
                            </p>
                        </div>
                    )}

                </div>

                <div className='card-2 relative'>
                    <img src="/img4.png" className={`border-2 w-[345px] h-[280px] rounded-2xl border-solid border-white ${isVisible[1] ? '' : 'grayscale'}`} 
                    style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', borderTopColor: 'white', borderBottomColor: 'gray' }} />
                    <div className='absolute top-[157px] left-5 text-white '>
                        <img src="/Group 2.png" className="w-[35px] h-[35px] rounded-2xl " />
                        <h1 className='text-2xl font-semibold'>Design</h1>
                        <h3 className='text-[8px] leading-9 font-normal'> USER INTERFACE DESIGN</h3>
                    </div>

                    <div className='absolute top-[260px] left-5'>
                        <button className='border text-xl text-white rounded-[100%] h-[35px] w-[35.8px]'
                            onClick={() => handleButtonClick(1)}
>
                            {isVisible[1] ? '-' : '+'}
                        </button>
                    </div>
                    {isVisible[1] && (
                        <div className='text-white pt-6 sm:w-[100%] md:w-[40vw]'>
                            <p className='text-sm text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus, officiis
                                reprehenderit corporis
                                totam eum numquam magni
                            </p>
                        </div>
                    )}
                </div>

                <div className='card-3 relative'>
                    <img src="/img3.png" className={`border-2 w-[345px] h-[280px] rounded-[3px] border-solid border-white ${isVisible[2] ? '' : 'grayscale'}`} 
                    style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', borderTopColor: 'white', borderBottomColor: 'gray' }} />
                    <div className='absolute top-[157px] left-5 text-white '>
                        <img src="/Group 3.png" className="w-[35px] h-[35px] rounded-2xl " />
                        <h1 className='text-2xl font-semibold'>DEVELOPMENT</h1>
                        <h3 className='text-[8px] leading-9 font-normal'> USER INTERFACE DESIGN</h3>
                    </div>

                    <div className='absolute top-[260px] left-5'>
                        <button className='border text-xl text-white rounded-[100%] h-[35px] w-[35.8px]'
                            onClick={() => handleButtonClick(2)}
                        >
                            {isVisible[2] ? '-' : '+'}
                        </button>
                    </div>
                    {isVisible[2] && (
                        <div className='text-white pt-6 sm:w-[100%] md:w-[40vw]'>
                            <p className='text-sm text-left'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus, officiis
                                reprehenderit corporis
                                totam eum numquam magni
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Mobile_Approach;





