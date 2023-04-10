import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import CategoryList from '../CategoryList/CategoryList';
import Featured from '../Featured/Featured';

const Home = () => {
    const categories= useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <CategoryList categories={categories}></CategoryList>
            <Featured></Featured>
            
        </div>
    );
};

export default Home;