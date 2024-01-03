import React from 'react'
import university from '../assests/download.jpg'
import memoji from '../assests/About me.png'

function About () {

    return(
        <div className='flex flex-row justify-center items-center w-full mx-auto mt-[150px]'>
            {/* images div */}
            <div className='flex flex-col mx-10 relative'>
                <img src={university} alt="background" className='w-[250px] h-[250px] rounded-lg object-cover' />
                <div className='bg-red-500'>
                <img src={memoji} alt="memoji" className='w-[150px] h-[150px] absolute -bottom-10 -right-5 bg-slate-200 rounded-full p-2'/>
                </div>
            </div>

            {/* about me */}

            <div className='flex flex-col justify-center w-1/2'>
                <h3 className='font-extrabold text-2xl text-blue-500 my-2'>About me</h3>
                <h3 className='font-bold text-2x my-2'>A passionate CIS Student.</h3>
                <p className='text-slate-800'>Baljit Singh, dedicated full-time student at KPU, specializing in Computer Information Systems. Currently honing expertise in full-stack development, I excel in seamlessly integrating front and back-end technologies. Beyond coding, I stay abreast of cutting-edge tech trends, ensuring a well-rounded approach to innovation. Here's to the ongoing journey in the realm of computer information systems!</p>
            </div>
        </div>
    )
}

export default About;