import React from 'react'
import Card from './Card';

function Project({data}){

    return (
        // using map function to send data to the card
        <div className='mt-[180px] p-5'>

            <h1 className='ml-[280px] font-extrabold text-2xl text-blue-500'>Projects</h1>
            <p className='ml-[280px] mt-2 font-extrabold'>Elevating Projects, One Line of Code at a Time. 🌱</p>
            {data.map( (myData) => (
                <Card myData={myData}/>
            )
            )}
            </div>
    )

}

export default Project;