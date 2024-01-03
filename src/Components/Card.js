import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";

function Card({myData}) {

    return (
        <div className='flex justify-center items-center mt-[100px] gap-5'>
            {/* Image Div */}

            <div>
                <img src={myData.img} alt="image" className='h-[300px] rounded-md shadow-md  object-cover'/>
            </div>

            {/* description div  */}
            <div className='flex flex-col items-center w-[30%]'>
            <h1 className='font-bold text-[1.25rem] mb-2'>{myData.title}</h1>
            <div className='mb-2 italic'>{myData.tech}</div>
            <div className='text-slate-500'>{myData.description}</div>
            <div>

            </div>
                <FaSquareGithub className='mt-4 text-slate-700 text-2xl'/>
            </div>
        </div>
    )


}

export default Card;