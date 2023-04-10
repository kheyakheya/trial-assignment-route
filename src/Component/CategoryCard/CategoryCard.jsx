import React from 'react';

const CategoryCard = ({category}) => {
    return (
        <div className=' p-4 rounded-md bg-blue-200'>
            <img className='py-2 w-14 h-14 rounded-md' src={category.logo} alt="" />
            <h3 className='font-bold text-2xl'> {category.category}</h3>
            <p>{category.jobs} Jobs Available</p>
        </div>
    );
};

export default CategoryCard;