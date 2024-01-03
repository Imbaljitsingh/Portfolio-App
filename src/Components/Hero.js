import React from 'react'
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import ProfileImg from '../assests/Profile.jpg'
import { Link } from 'react-router-dom';

function Hero() {

    return (

        <div className='flex flex-row items-center justify-center w-9/12 mx-auto py-[100px] mt-10'>
            <div className='mx-20'>
                <div>
                    <h1 className='font-bold text-5xl mb-2'>Hey, I am Baljit 👋🏾</h1>
                    <p className='mt-4 text-[10px] text-slate-800'>A passionate computer information system student.<br /> Currently, learning full-stack devlopment. I am based in Vancouver, BC. 📍</p>
                </div>
                <div className='flex gap-3 mt-4 text-slate-700 text-2xl'>

                    <Link to="https://github.com/Imbaljitsingh"><FaSquareGithub /></Link>
                    <Link to="https://www.linkedin.com/in/baljit-singh-464899228/"><FaLinkedin />
                    </Link>
                </div>
            </div>

            {/* blob */}

            <div>
                <div className="blob h-[400px] w-[400px]">
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">

                        <defs>
                            <pattern id="imagePattern" x="0" y="0" patternUnits="userSpaceOnUse" width="500" height="500">
                                <image href={ProfileImg} x="0" y="0" width="500" height="500" />
                            </pattern>
                        </defs>
                        <path id="blob" fill="url(#imagePattern)
                        "

                            stroke="black"
                            strokeWidth="2">
                            <animate
                                attributeName='d'
                                dur="10000ms"
                                repeatCount="indefinite"
                                values='

                            M448,312.5Q466,375,407.5,398Q349,421,299.5,442Q250,463,189.5,461.5Q129,460,87,414Q45,368,58,309Q71,250,79,203Q87,156,115.5,111.5Q144,67,197,59Q250,51,305.5,54.5Q361,58,401.5,98.5Q442,139,436,194.5Q430,250,448,312.5Z;


                            M426.5,300.5Q425,351,399.5,407.5Q374,464,312,456Q250,448,199,437Q148,426,111,388.5Q74,351,40,300.5Q6,250,24.5,190.5Q43,131,102,113.5Q161,96,205.5,67.5Q250,39,302,54.5Q354,70,383,113.5Q412,157,420,203.5Q428,250,426.5,300.5Z;

                            M414,294Q402,338,373.5,376.5Q345,415,297.5,436.5Q250,458,195,449Q140,440,94,403Q48,366,24.5,308Q1,250,41.5,201.5Q82,153,108.5,102Q135,51,192.5,34.5Q250,18,299.5,48Q349,78,387.5,113.5Q426,149,426,199.5Q426,250,414,294Z;

                            M430,299.5Q421,349,394,401Q367,453,308.5,452.5Q250,452,195.5,445Q141,438,116,390Q91,342,61.5,296Q32,250,43.5,194Q55,138,104,110Q153,82,201.5,73.5Q250,65,298.5,74Q347,83,404,105.5Q461,128,450,189Q439,250,430,299.5Z;

                            M448,312.5Q466,375,407.5,398Q349,421,299.5,442Q250,463,189.5,461.5Q129,460,87,414Q45,368,58,309Q71,250,79,203Q87,156,115.5,111.5Q144,67,197,59Q250,51,305.5,54.5Q361,58,401.5,98.5Q442,139,436,194.5Q430,250,448,312.5Z;
                            '
                            >

                            </animate>
                        </path>
                    </svg>
                </div>
            </div>
        </div>

    )


}

export default Hero;