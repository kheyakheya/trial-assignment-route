import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const ApplyCard = ({applyJob}) => {
    const {companyName,id, companyLogo,jobTitle, fulltimeOrPartTime, remoteOrOnsite, location, salary}=applyJob;
    return (
        <div className='w-2/3 m-4 mx-auto flex justify-between items-center border-blue-400 border-2 rounded-md p-4'>

                <div className='flex gap-4 items-center'>
                <div>
                <img className='w-24 h-24' src={companyLogo} alt="" />
                </div>
                
                <div>
                 <h2>{jobTitle}</h2>
                 <h2>{companyName}</h2>
                 <div className='flex gap-4 my-2'>
                
                    <h1 className=' border-blue-400 border-2 rounded-md px-1'>{fulltimeOrPartTime}</h1>
                
                    <h1 className=' border-blue-400 border-2 rounded-md px-1'>{remoteOrOnsite}</h1>
                
                </div>
                <div className='flex gap-2 my-2'>
                    <div><MapPinIcon className='w-4 h-4 inline'></MapPinIcon><h1 className='inline'>{location}</h1></div>
                    <div><CurrencyDollarIcon className='w-4 h-4 inline'></CurrencyDollarIcon><h1 className='inline'>{salary}</h1></div>
                </div>
                </div>
                </div>
                
                
                           {/* <div className='flex gap-2 my-2'>
                <div><MapPinIcon className='w-4 h-4 inline'></MapPinIcon><h1 className='inline'>locat</h1></div>
                <div><CurrencyDollarIcon className='w-4 h-4 inline'></CurrencyDollarIcon><h1 className='inline'>sal</h1></div>
            </div> */}
                
            <div>
            <Link to={`/jobs/${id}`}><button className='btn-primary'>View Details</button></Link>

            </div>
            </div>
            
        
    );
};

export default ApplyCard;