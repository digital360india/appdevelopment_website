import React from 'react';
import CmsMobile from './CmsMoblie';

const Cms_solutions = () => {
    return (
        <div>
            <div className='cms hidden md:flex flex-col md:gap-10 xl:gap-0 sm:flex-row sm:justify-around p-6'>

                <div className='left-content'>
                    <img
                        src='/Rectangle 15.png'
                        className='rounded-lg w-full h-full object-cover'
                        alt='cms dashboard image'
                    />
                </div>

                <div className='right-content flex flex-col justify-end md:gap-5 lg:gap-12 md:w-[50%]'>

                    <h1 className='text-[#13375D] text-[32px] md:text-3xl lg:text-6xl leading-[42px]  font-semibold'>
                        <span className="inline-block">WE PROVIDE</span>
                        <span className="inline-block">CMS DASHBOARD</span>
                    </h1>

                    <p className="font-normal  text-sm   md:text-xl lg:text-2xl md:tracking-tight w-full"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi impedit, eligendi eveniet mollitia veniam in debitis maxime autem neque, amet fuga excepturi blanditiis vitae velit
                        repellendus atque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea unde suscipit aut nisi nostrum totam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aperiam.</p>

                    <button className="text-white rounded-md w-full lg:w-[341px] h-[56px]"
                        style={{
                            background: 'linear-gradient(to right, #13375D,  #ADBAC8)'
                        }}
                    >
                        Enquire now
                    </button>
                </div>
            </div>
            <div className='md:hidden'>
<CmsMobile/>
</div>
        </div>
    );
}

export default Cms_solutions;

