import React from 'react';

const Route404 = () => {
    return (
        <div className='w-1/3 mx-auto my-28 text-center'>
            <h3 className='text-2xl my-8'>No Data Loaded this Path</h3>
            <p className='text-red-500'>404 Data Not Found</p>
            <small className='text-base my-4'>Please go to the Right path</small>
        </div>
    );
};

export default Route404;