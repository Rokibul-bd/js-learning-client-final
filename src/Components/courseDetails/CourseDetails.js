import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    const { name, body, imgUrl, duration, price } = details
    console.log(details)
    return (
        <div className='shadow-lg rounded-md md:w-1/3 mx-auto p-8 mt-28'>
            <img className='w-full object-cover' src={imgUrl} alt="" />
            <h4 className='my-4 text-4xl'>{name}</h4>
            <p>{body}</p>
            <p className='text-lg my-4'>Course Duration : <small className='text-2xl text-teal-500'>{duration}</small></p>
            <p>Price : {price}</p>
        </div>
    );
};

export default CourseDetails;