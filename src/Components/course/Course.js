import React from 'react';

const Course = ({ course }) => {
    const { body, price, name, imgUrl } = course
    return (
        <div className='shadow-lg rounded-md my-12 p-4'>
            <img className='w-full object-cover' src={imgUrl} alt="" />
            <h3 className='my-4 text-xl'>{name}</h3>
            <p className='my-4'>{body.slice(0, 130)}</p>
            <p className='my-4'>Price : {price}</p>
            <div className='flex justify-between'>
                <button className='text-lg bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-md text-white me-4'>View Course Details</button>
                <button className='text-lg bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-md text-white '>Cheackout</button>
            </div>
        </div>
    );
};

export default Course;