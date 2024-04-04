import React from 'react'

const CmsMobile = () => {
    return (
        <div className='cms flex flex-col gap-4 sm:flex-row sm:justify-around p-6'>

            <div className='left-content order-2 md:order-none'>
                <img
                    src='/Rectangle 15.png'
                    className='rounded-lg w-full h-[200px]'
                    alt='cms dashboard image'
                    style={{
                        boxShadow: '0 0 6px 1px rgba(0, 0, 0, 0.25)'
                    }}
                />
            </div>

            <div className='right-content'>
                <div className='order-1 md:order-none flex flex-col gap-5 '>
                    <h1 className='text-[#13375D] text-[32px] lg:text-6xl leading-[42px]  font-semibold'>
                        <span className="inline-block">WE PROVIDE</span>
                        <span className="inline-block">CMS DASHBOARD</span>
                    </h1>

                    <p className="font-normal  text-sm  md:text-2xl md:tracking-tight"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi impedit, eligendi eveniet mollitia veniam in debitis maxime autem neque, amet fuga excepturi blanditiis vitae velit
                        repellendus atque? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea unde suscipit aut nisi nostrum totam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, aperiam.
                    </p>

                </div>
            </div>

            <div className='order-3 md:order-none'>
                <button className="text-white rounded-md w-full h-[50px]"
                    style={{
                        background: 'linear-gradient(to right, #13375D,  #ADBAC8)'
                    }}
                >
                    Enquire now
                </button>
            </div>

        </div>
    )
}

export default CmsMobile;
