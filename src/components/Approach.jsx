import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Mobile_Approach from './Mobile_Approach';

const Approach = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])

  const [isVisible, setIsVisible] = useState({});

  const handleButtonClick = (index) => {
    setIsVisible(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div>
      <div className='hidden lg:flex'>
        <div className="  w-full py-10 px-14 " style={{ backgroundImage: 'linear-gradient(179.82deg, #13375D 20.92%, rgba(19, 55, 93, 0.89) 65.25%, rgba(19, 55, 93, 0.85) 97.43%, #FFFFFF 124.21%)' }}>
          <h1 className='px-5 text-white font-semibold text-4xl md:w-[334px] md:h-[156px] md:text-6xl md:leading-[78px]'>OUR APPROACH</h1>
          <div className='px-4'>

            {/* firstcard */}
            <div className='relative w-full  py-8' data-aos="fade-up">
              <div className="left-content">
                <div className='flex items-center justify-center z-10'>
                  <div>
                    <img src="/flight planning photo 1.png" className={`w-[100%] h-full border-2 rounded-2xl ${isVisible[0] ? '' : 'grayscale'} z-10`}
                      style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', borderTopColor: 'white', borderBottomColor: 'gray' }} />
                  </div>

                  <div className=' text-white  '> {/*right-content*/}
                    <div className='flex lg:w-[35.5vw] absolute top-[35%] -right-[57px]   xl:w-[39.8vw] 2xl:w-[41vw] '>

                      <div className={`w-24 h-20 ${isVisible[0] ? 'bg-white' : 'bg-blue-800 '} flex items-center justify-center rounded-full ${isVisible[0] ? '' : 'grayscale'}`}>
                        <span className={`text-4xl font-bold ${isVisible[0] ? 'text-blue-800 ': 'text-slate-400'}`}>
                        1
                        </span>
                      </div>

                      <div className=' w-full'>
                        <div><h1 className='text-5xl leading-[60px]  font-semibold  ml-2 '>Research</h1></div>
                        <div><h3 className='text-2xl font-normal ml-2'> USER RESEARCH AND USER EXPERIENCE</h3></div>
                        <div className=' flex text-white'>
                          <button className='border text-2xl flex justify-center items-center rounded-[100%] h-20 w-20 p-10 mr-4 mt-8' onClick={() => handleButtonClick(0)}>
                            {isVisible[0] ? '-' : '+'}
                          </button>
                          {isVisible[0] && (
                            <div className=' flex text-white py-5 w-[80%]' data-aos="fade-up" >
                              <p className='text-[18px] font-normal text-lg leading-7 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus, officiis reprehenderit corporis totam eum numquam magni
                                dolorem repudiandae quas doloremque omnis quasi laboriosam quo
                                voluptates nostrum provident, tempora eius alias.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div className='relative w-full py-8' data-aos="fade-up">
              <div className="left-content">
                <div className='flex items-center justify-start z-10'>
                  <div>
                    <img src="/img4.png" className={`w-[100%] h-full border-2 rounded-2xl ${isVisible[1] ? '' : 'grayscale'} z-10`}
                      style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', borderTopColor: 'white', borderBottomColor: 'gray' }} />
                  </div>
                  <div className=' text-white  '> {/*right-content*/}

                    <div className='flex lg:w-[35.5vw] absolute top-[35%] left-96  xl:w-[39.8vw]'>
                      <div className={`w-24 h-20 ${isVisible[1] ? 'bg-white' : 'bg-blue-800 '} flex items-center justify-center rounded-full ${isVisible[1] ? '' : 'grayscale'}`}>
                        <span className={`text-4xl font-bold ${isVisible[1] ? 'text-blue-800 ': 'text-slate-400'}`}>
                        2
                        </span>
                      </div>
                      <div className=' w-full'>
                        <div><h1 className='text-5xl leading-[60px]  font-semibold  ml-2 '>Design</h1></div>
                        <div><h3 className='text-2xl leading-9 font-normal ml-2 '>USER INTERFACE DESIGN</h3></div>
                        <div className=' flex text-white'>
                          <button className='border text-2xl flex justify-center items-center rounded-[100%] h-20 w-20  mr-4 mt-8' onClick={() => handleButtonClick(1)}>
                            {isVisible[1] ? '-' : '+'}
                          </button>
                          {isVisible[1] && (
                            <div className=' flex text-white py-5 w-[65%]' data-aos="fade-up" >
                              <p className='text-[18px] font-normal text-lg'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus, officiis reprehenderit corporis totam eum numquam magni
                                dolorem repudiandae quas doloremque omnis quasi laboriosam quo
                                voluptates nostrum provident, tempora eius alias.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
           {/* third card */}
            <div className='relative w-full  py-8' data-aos="fade-up">
              <div className="left-content">
                <div className='flex items-center justify-center z-10'>
                  <div>
                    <img src="/flight planning photo 1.png" className={`w-[100%] h-full border-2 rounded-2xl ${isVisible[2] ? '' : 'grayscale'} z-10`}
                      style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', borderTopColor: 'white', borderBottomColor: 'gray' }} />
                  </div>

                  <div className=' text-white  '> {/*right-content*/}
                    <div className='flex lg:w-[35.5vw] absolute top-[35%] -right-[57px]   xl:w-[39.8vw] 2xl:w-[41vw] '>

                      <div className={`w-24 h-20 ${isVisible[2] ? 'bg-white' : 'bg-blue-800 '} flex items-center justify-center rounded-full ${isVisible[2] ? '' : 'grayscale'}`}>
                        <span className={`text-4xl font-bold ${isVisible[2] ? 'text-blue-800 ': 'text-slate-400'}`}>
                        3
                        </span>
                      </div>

                      <div className=' w-full'>
                        <div><h1 className='xl:text-5xl lg:text-4xl leading-[60px]  font-semibold  ml-2 '>Development</h1></div>
                        <div><h3 className='text-2xl font-normal ml-2'> USER EXPERIENCE </h3></div>
                        <div className=' flex text-white'>
                          <button className='border text-2xl flex justify-center items-center rounded-[100%] h-20 w-20 p-10 mr-4 mt-8' onClick={() => handleButtonClick(2)}>
                            {isVisible[2] ? '-' : '+'}
                          </button>
                          {isVisible[2] && (
                            <div className=' flex text-white py-5 w-[80%]' data-aos="fade-up" >
                              <p className='text-[18px] font-normal text-lg leading-7 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Ducimus, officiis reprehenderit corporis totam eum numquam magni
                                dolorem repudiandae quas doloremque omnis quasi laboriosam quo
                                voluptates nostrum provident, tempora eius alias.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:hidden flex justify-center items-center' 
      style={{ backgroundImage: 'linear-gradient(179.82deg, #13375D 20.92%, rgba(19, 55, 93, 0.89) 65.25%, rgba(19, 55, 93, 0.85) 97.43%, #FFFFFF 124.21%)' }}>
        <Mobile_Approach />
      </div>

    </div>
  )
}

export default Approach;
