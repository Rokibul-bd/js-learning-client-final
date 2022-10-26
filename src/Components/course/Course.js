import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { body, price, name, imgUrl, id } = course
    return (
        <div className='shadow-lg rounded-md my-2 md:my-12 p-4'>
            <img className='w-full object-cover' src={imgUrl} alt="" />
            <h3 className='my-4 text-xl'>{name}</h3>
            <p className='my-4'>{body.slice(0, 130)}</p>
            <p className='my-4'>Price : {price}</p>
            <div className='flex justify-between'>
                <Link to={`/courses/${id}`}><button className='text-xs md:text-lg bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-md text-white me-4'>View Details</button></Link>
                <button className='text-xs ml-2 md:text-lg bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-md text-white '>Cheackout</button>
            </div>
        </div>
    );
};

export default Course;