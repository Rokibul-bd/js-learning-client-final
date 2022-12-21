import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const handleRegisterForm = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/login')
            })
            .catch(error => console.error(error))
    }
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
    }
    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
    }
    return (
        <div>
            <form onSubmit={handleRegisterForm} className="hero min-h-screen bg-base-200 pt-28">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left mb-12">
                        <h1 className="text-5xl font-bold">Please Sign up now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" placeholder="Image Url" name="imgUrl" className="input input-bordered" />
                            </div>
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
                                    New to website Please <Link to="/login" className="text-base btn-link link-hover">Log In</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>
                            <div className='flex justify-between'>
                                <button className='btn btn-md' onClick={handleGoogleSignIn}>Google Sign In</button>
                                <button className='btn btn-md' onClick={handleGithubSignIn}>Github Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;