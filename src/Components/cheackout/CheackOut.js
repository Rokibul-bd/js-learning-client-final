import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheackOut = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const { name, imgUrl, price } = data
    return (
        <>
            <h3 className='text-center text-3xl font-semibold mt-16'>Hello, {user.displayName} welcome to <span className='text-red-500'>{name} </span> course</h3>
            <div className='shadow-lg rounded-md md:w-1/3 mx-auto p-8 mt-28'>
                <img className='w-full object-cover' src={imgUrl} alt="" />
                <h4 className='my-12 text-4xl'>{name}</h4>
                <p className='my-4 text-lg'>Submit Promo code get 1000tk Discount</p>
                <div className="md:flex justify-between">
                    <label className="text-lg">
                        <span className="label-text">Promo Code</span>
                    </label>
                    <input type="text" placeholder="Promo Code" className="input input-bordered" />
                </div>
                <p>Price : {price}</p>
                <button className='text-lg px-4 py-2 shadow-md rounded-md my-8 bg-purple-600 hover:bg-purple-500 text-white'>Get Premium Purchase</button>
            </div>
        </>
    );
};

export default CheackOut;