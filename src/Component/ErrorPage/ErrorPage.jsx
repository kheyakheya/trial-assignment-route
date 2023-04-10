import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error,status}=useRouteError();
    return (
        <div className='flex justify-center items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div>
                <h1 className='3xl font-bold'>SORRY!</h1>
                <h2 className='2xl text-blue-400'>{status ? status : "CODE UNKNOWN"}</h2>

                <h2 className='xl'>{error?.message}</h2>
                <h2></h2>
            </div>
            
        </div>
    );
};

export default ErrorPage;