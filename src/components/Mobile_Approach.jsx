
import React, { useState } from 'react';

const Mobile_Approach = () => {
    const [isVisible, setIsVisible] = useState({});

    const handleButtonClick = (index) => {
        setIsVisible(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    // Array for the card data
    const sections = [
        {
            imageSrc: '/flight planning photo 1.png',
            title: 'Research',
            subtitle: 'USER RESEARCH AND USER EXPERIENCE',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis reprehenderit corporis totam eum numquam magni.'
        },
        {
            imageSrc: '/img4.png',
            title: 'Design',
            subtitle: 'USER INTERFACE DESIGN',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis reprehenderit corporis totam eum numquam magni.'
        },
        {
            imageSrc: '/img3.png',
            title: 'Development',
            subtitle: 'USER INTERFACE DESIGN',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis reprehenderit corporis totam eum numquam magni.'
        }
    ];

    return (
        <div className="w-full px-4 py-8">
            <h1 className='px-5 text-white md:px-16 md:py-5 md:text-[45px] font-semibold text-[32px] leading-[43px] '>OUR APPROACH</h1>

            <div className='px-3 py-5 flex flex-col justify-center items-center gap-7'>
                {sections.map((section, index) => (
                    <div key={index} className={`card-${index + 1} relative`}>
                        <img
                            src={section.imageSrc}
                            className={`w-[345px] h-[280px] rounded-2xl border-2 border-white border-solid ${isVisible[index] ? '' : 'grayscale'}`}
                            style={{
                                borderTopLeftRadius: '10px',
                                borderTopRightRadius: '10px',
                                borderBottomLeftRadius: '10px',
                                borderBottomRightRadius: '10px',
                                borderTopColor: 'white',
                                borderBottomColor: 'gray'
                            }}
                        />

                        <div className='absolute top-[157px] left-5 text-white'>

                            <div class={`w-[35px] h-[35px] bg-white flex items-center justify-center rounded-full border border-white ${isVisible[index] ? '' : 'grayscale'}`}>
                                <span class="text-blue-800 text-lg font-bold">
                                    {index+1}
                                </span>
                            </div>

                            <h1 className='text-2xl font-semibold'>{section.title}</h1>
                            <h3 className='text-[8px] leading-9 font-normal'>{section.subtitle}</h3>
                        </div>

                        <div className='absolute top-[260px] left-5'>
                            <button
                                className='border text-xl text-white rounded-[100%] h-[35px] w-[35.8px]'
                                onClick={() => handleButtonClick(index)}
                            >
                                {isVisible[index] ? '-' : '+'}
                            </button>
                        </div>

                        {isVisible[index] && (
                            <div className='text-white pt-6 w-[80vw] md:w-[45vw] md:h-[80px]' data-aos="fade-up">
                                <p className='text-sm text-left'>
                                    {section.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mobile_Approach;