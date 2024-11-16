import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {

    const { handleLogin } = useContext(AuthContext)


    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleLogin(email, password)

    }


    return (
        <div>
            < div className='bg-base-200 min-h-screen pt-10 flex flex-col justify-center items-center'>
                <div className="card bg-base-100  shrink-0 shadow-2xl md:w-6/12 m-auto">
                    <h1 className='text-3xl font-bold text-center  px-12 py-9'>Login your account</h1>
                    <form onSubmit={(e) => handleLoginSubmit(e)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="p-3 text-white rounded-md bg-[#403F3F]">Login</button>
                        </div>
                    </form>
                    <p className='text-center p-4'>Dont’t Have An Account ? <Link to='/auth/register' className='text-red-600'>Register</Link></p>
                </div>
            </div>
        </div >
    );
};

export default Login;