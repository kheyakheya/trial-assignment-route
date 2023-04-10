import React, { useContext } from 'react';
import { CartContext } from '../Layout/Layout';
import ApplyCard from '../ApplyCard/ApplyCard';



const AppliedJobs = () => {
const [cart, setCart] = useContext(CartContext || []);

console.log("A",cart);
    return (
        <div>
            <h1 className='text-center text-4xl text-blue-400 py-4'>Applied Jobs</h1>
            {cart?.map(applyJob=><ApplyCard key={applyJob.id} applyJob={applyJob}></ApplyCard>)}
        </div>
    );
};

export default AppliedJobs;