import React, { createContext, useState } from 'react';
import Header from '../Header';
import { Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import LoadingPage from '../LoadingPage/LoadingPage';

export const JobContext = createContext([]);
export const CartContext = createContext([])
    
const Layout = () => {
    
    const navigation= useNavigation();
    const { jobs, initialCart }=useLoaderData();
    console.log("iii", initialCart)
    const [cart, setCart] = useState(initialCart)
    console.log("i",cart);

    return (
        
        <JobContext.Provider value={jobs}>
            <CartContext.Provider value={[cart, setCart]}>
            <Header></Header>
            <div>{navigation.state==='loading' && <LoadingPage></LoadingPage>}</div>
            <Outlet></Outlet>
            </CartContext.Provider>
        </JobContext.Provider>
        
    );
};

export default Layout;