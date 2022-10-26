import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="navbar shadow-lg px-20">
                <div className="flex-1">
                    <Link to="/courses" className="normal-case text-4xl"> <span className='text-red-500'>Js</span> Learning</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="">
                        <Link className='px-4 text-xl' to="/courses">Courses</Link>
                    </div>
                    <div className="">
                        <Link className='px-4 text-xl' to="/blog">Blog</Link>
                    </div>
                    <div className="">
                        <Link className='px-4 text-xl' to="/register">Register</Link>
                    </div>
                    <div className="">
                        <Link className='px-4 text-xl' to="/login">Log In</Link>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt="" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a href='/' className="justify-between">
                                    {user?.displayName}
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='/'>Settings</a></li>
                            <li><a href='/'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;