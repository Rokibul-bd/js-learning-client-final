import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { googleSignIn, githubSignIn, createUser, setUserProfile } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => console.error(error))
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const form = e.target
        const fullName = form.name.value
        const imgUrl = form.imageUrl.value
        const email = form.email.value
        const password = form.password.value
        console.log(fullName, email, password, imgUrl)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
        setUserProfile(fullName, imgUrl)
            .then(() => {

            })
            .catch(error => console.error(error))
        navigate('/courses')
    }

    return (
        <form onSubmit={handleFormSubmit} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-12">
                    <h1 className="text-5xl font-bold">Please Sign Up now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" placeholder="Image url" name="imageUrl" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="mt-2">
                                Already have an account please <Link to="/login" className="text-base link link-hover btn-link">log in</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                        <button onClick={handleGoogleSignIn} className='btn btn-sm'>Google Sign In</button>
                        <button onClick={handleGithubSignIn} className='btn btn-sm'>Github Sign In</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;