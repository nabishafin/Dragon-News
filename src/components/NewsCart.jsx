import React from 'react';
import Navbar from './Navbar';
import SocialLogin from './SocialLogin';
import FindUsOn from './FindUsOn';
import Qzone from './Qzone';
import Bg from './bg';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";


const NewsCart = () => {

    const news = useLoaderData()

    const cartNews = news.data[0]
    console.log(cartNews)


    return (
        <div className='border-2'>
            <Navbar></Navbar>
            <div className='grid grid-cols-12 p-3'>
                <div className='col-span-9'>
                    <h1 className='font-bold'>Dragon News</h1>
                    <div className='mt-5'>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={cartNews.
                                        image_url
                                    }
                                    alt="Shoes"
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title">{cartNews.title
                                }</h2>
                                <p>{cartNews.details}</p>
                                <div className="card-actions">
                                    <button className='p-2  bg-[#D72050] text-white w-full flex items-center justify-center gap-3'>
                                        <FaArrowLeft />
                                        <Link to='/'> All news in this category</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 md:col-span-3 border-2 border-fuchsia-600 p-3'>
                    <SocialLogin></SocialLogin>
                    <FindUsOn></FindUsOn>
                    <Qzone></Qzone>
                    <Bg></Bg>
                </div>
            </div>
        </div>
    ); 1
};

export default NewsCart;