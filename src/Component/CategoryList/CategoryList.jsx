import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryList = ({categories}) => {
    
    return (
        <div className='container-space'>
            <h2 className='text-center text-3xl text-blue-400 py-3'>Job  Category List</h2>
            <p className='text-center'>Explore your field and find your job</p>
            <div className='py-6 grid grid-cols-2 md:grid-cols-4 gap-4'>
                {categories.map(category=><CategoryCard key={category.id} category={category}></CategoryCard>)}
            </div>
        
        </div>
    );
};

export default CategoryList;