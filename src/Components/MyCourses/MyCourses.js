import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyCourse from '../MyCourse/MyCourse';

const MyCourses = () => {
    const [courses, setCourses] = useState([])
    const { user } = useContext(AuthContext)
    const email = user.email

    useEffect(() => {
        fetch(`http://localhost:5000/booking/${email}`)
            .then(res => res.json())
            .then(data => {
                setCourses(data)
            })
    }, [email])
    return (
        <div className='container mx-auto'>
            <div className='grid lg:grid-cols-2 gap-8 col-span-4 my-12 justify-center'>
                {
                    courses.map(course => <MyCourse key={course._id} course={course}></MyCourse>)
                }
            </div>
        </div>
    );
};

export default MyCourses;