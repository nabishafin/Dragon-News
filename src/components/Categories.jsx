import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Categories = () => {

    const [categories, setCategories] = useState([])
    console.log(categories)
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategories(data.data.news_category))
    }, [])


    return (
        <div>
            <h1 className='font-bold'>All Caterogy</h1>
            <div className='flex flex-col gap-2 mt-5 '>
                {
                    categories.map(category =>
                        <NavLink to={`/category/${category.category_id}`} className='btn' key={category.category_id}>{category.category_name}</NavLink>
                    )
                }
            </div>
        </div >
    );
};

export default Categories;