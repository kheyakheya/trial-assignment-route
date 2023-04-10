import React, { useContext, useState } from 'react';
import { JobContext } from '../Layout/Layout';
import FeatureCard from '../FeatureCard/FeatureCard';

const Featured = () => {
    
    const jobs=useContext(JobContext || [])
    console.log("f",jobs)
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(true);
      };
    return (
        <div className='container-space'>
            <h1 className='text-center text-3xl text-blue-400 py-3'>Featured Jobs</h1>
            <p className='text-center'>Explore featured job for your future</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-8 px-8'>
               {jobs?.slice(0, showAll ? 6 : 4).map(job=><FeatureCard key={job.id} job={job}></FeatureCard>)}
            </div>
            {!showAll && (
          <div className='text-center'><button onClick={handleShowAll} className='btn-primary'>See All Jobs</button></div>
      )}
            
        </div>
    );
};

export default Featured;