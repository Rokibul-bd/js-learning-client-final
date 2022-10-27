import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const details = useLoaderData();
    const { name, body, imgUrl, duration, price, id } = details
    console.log(details)
    return (
        <div className='shadow-lg rounded-md md:w-1/3 mx-auto p-8 mt-28'>
            <img className='w-full object-cover' src={imgUrl} alt="" />
            <h4 className='my-4 text-4xl'>{name}</h4>
            <p>{body}</p>
            <p className='text-lg my-4'>Course Duration : <small className='text-2xl text-teal-500'>{duration}</small> Hours</p>
            <p>Price : {price}</p>
            <Link to={`/courses/${id}/cheackout`}> <button className='text-lg px-4 py-2 shadow-md rounded-md my-4 bg-purple-600 hover:bg-purple-500 text-white'>Cheack Out</button></Link>

        </div>
    );
};

export default CourseDetails;