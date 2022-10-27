import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const LogIn = () => {
    const { logIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const handleLogInSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message
                setError(errorMessage)
            })

    }
    return (
        <form onSubmit={handleLogInSubmit} className="hero min-h-screen bg-base-200 pt-28">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-12">
                    <h1 className="text-5xl font-bold">Please Log in now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" />
                            <label className="mt-2">
                                New to website Please <Link to="/register" className="text-base btn-link link-hover">Sign Up</Link>
                            </label>
                        </div>
                        <p className='text-read-500'>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default LogIn;