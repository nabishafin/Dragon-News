import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './Cart';

const CategoryNews = () => {


    const data = useLoaderData([])

    const news = data.data
    return (
        <div>
            <h1 className='font-bold'>Dragon News Home</h1>
            <div>
                {
                    news.map(singleNews =>
                        <Cart
                            news={singleNews}
                            key={singleNews._id}
                        ></Cart>
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;