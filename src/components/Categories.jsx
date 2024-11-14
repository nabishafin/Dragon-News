import React, { useEffect, useState } from 'react';

const Categories = () => {

    const [categories, setCategories] = useState([])

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
                    categories.map(c =>
                        <button className='btn' key={c.category_id}>{c.category_name}</button>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;