import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../course/Course';

const Courses = () => {
    const courses = useLoaderData()

    return (
        <div className='grid lg:grid-cols-5 mt-28 px-20 gap-8'>
            <div className='grid lg:grid-cols-3 gap-8 col-span-4 my-12'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
            <div className='hidden md:block text-cente my-28'>
                {
                    courses.map(course => <p key={course.id} className='my-8 text-lg text-center'><Link to={`/courses/${course.id}`} className=' bg-teal-200 px-24 py-2'>{course.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default Courses;