import React from 'react'
import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

function Tech(){
    return (
        <div className='flex gap-2 justify-center items-center my-6'>
            <p className='text-xl font-bold'>Tech Stack</p>
            <div className='h-8 ml-3 w-0.5 bg-black'></div>
            <div className='flex gap-11 text-3xl mx-10'>
            <FaHtml5 className='text-[#e44d26]'/>
            <FaCss3 className='text-[#006bc0]'/>
            <IoLogoJavascript className='text-[#f0db4f]'/>
            <SiTailwindcss className='text-[#38bdf8]'/>
            <FaReact className='text-[#8de5fc]'/>
            <TbBrandCpp className='text-[#004283]'/>

            </div>
        </div>
    )
}

export default Tech