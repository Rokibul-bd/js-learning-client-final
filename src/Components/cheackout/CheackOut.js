import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheackOut = () => {
    const data = useLoaderData();
    const { name, imgUrl, price } = data
    console.log(data)
    return (
        <>
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