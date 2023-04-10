import React from 'react';
import {
    MapPinIcon, CurrencyDollarIcon
  } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeatureCard = ({job}) => {
    const {remoteOrOnsite,companyLogo, companyName, jobTitle, location, fulltimeOrPartTime, salary, id}=job;
    return (
        <div className='px-12 py-6  border-blue-400 border-2 rounded-md'>
            <img className='w-40 h-28 p-2' src={companyLogo} alt="" />
            <h2 className='text-xl font-bold'>{jobTitle}</h2>
            <p className='text-xl'>{companyName}</p>
            <div className='flex gap-10 my-2'>
                
                    <h1 className=' border-blue-400 border-2 rounded-md px-1'>{fulltimeOrPartTime}</h1>
                
                
                    <h1 className=' border-blue-400 border-2 rounded-md px-1'>{remoteOrOnsite}</h1>
                
            </div>
            <div className='flex gap-10 my-2'>
                <div><MapPinIcon className='w-4 h-4 inline'></MapPinIcon><h1 className='inline'>{location}</h1></div>
                <div><CurrencyDollarIcon className='w-4 h-4 inline'></CurrencyDollarIcon><h1 className='inline'>{salary}</h1></div>
            </div>
            
            <Link to={`/jobs/${id}`}><button className='.btn-primary'>View Details</button></Link>
            
        </div>
    );
};

export default FeatureCard;