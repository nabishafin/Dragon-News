import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navlogo from '../assets/user.png'

const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold">
                            {
                                links
                            }
                        </ul>
                    </div>
                    {/* Link */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end flex gap-4 items-center">
                    <img src={navlogo} alt="" />
                    <Link to='/auth/login' className="bg-[#403F3F] py-2 px-4 rounded-md text-white">LogIn</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;