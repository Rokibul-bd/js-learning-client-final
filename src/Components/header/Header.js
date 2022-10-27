import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiUserCircle } from "react-icons/bi"
import { HiOutlineMenu } from "react-icons/hi";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useState } from 'react';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [view, setView] = useState(false)
    const handleMenu = () => {
        setView(!view)
    }
    return (
        <div>
            <div className="navbar shadow-lg px-20 relative">
                <div className="flex-1">
                    <Link to="/courses" className="normal-case text-4xl"> <span className='text-red-500'>Js</span> Learning</Link>
                </div>
                <div className='md:hidden'>
                    <HiOutlineMenu onClick={handleMenu} className='w-12 h-12'></HiOutlineMenu>
                </div>
                <div className={view ? "flex-none block gap-2 absolute top-10 right-7 shadow-lg p-8" : "flex-none hidden md:flex gap-2 shadow-none relative top-0 right-0 z-50"}>
                    <div className="">
                        <Link className='px-4 my-2 text-xl' to="/courses">Courses</Link>
                    </div>
                    <div className="">
                        <Link className='px-4 my-2 text-xl' to="/blog">Blog</Link>
                    </div>
                    {
                        user?.uid ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user?.uid ? <img src={user?.photoURL} alt="" /> : <BiUserCircle className='w-12 h-12 bg-purple-600'></BiUserCircle>
                                    }

                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a href='/' className="justify-between">
                                        {user?.displayName}
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a href='/'>Setting</a></li>
                                <li><p onClick={logOut} >Logout</p></li>
                            </ul>
                        </div> : <>
                            <div className="">
                                <Link className='px-4 my-2 text-xl' to="/register">Register</Link>
                            </div>
                            <div className="">
                                <Link className='px-4 my-2 text-xl' to="/login">Log In</Link>
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;