import React from 'react';

const MyCourse = ({ course }) => {
    const { name, imgUrl, price } = course;


    return (
        <div className='shadow-lg w-96 rounded-md my-2 md:my-12 p-4'>
            <img className='w-full object-cover' src={imgUrl} alt="" />
            <h3 className='my-4 text-xl'>{name}</h3>
            <p className='my-4'>Price : {price}</p>
            <div className='flex justify-between items-center'>
                <button className='btn'>Course Continue</button>
            </div>
        </div>
    );
};

export default MyCourse;