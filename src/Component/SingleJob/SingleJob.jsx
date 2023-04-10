import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext, JobContext } from '../Layout/Layout';
import { addToDb } from '../../utilities/fakeDb';

const SingleJob = () => {
 
    const allJobs=useContext(JobContext || []);
    const [cart, setCart] = useContext(CartContext || [])
    const handleAddToCart = job => {
      let newCart = []
      const exists = cart.find(
        existingJob => existingJob.id === job.id
      )
      if (!exists) {
        job.quantity = 1
        newCart = [...cart, job]
      } else {
        const rest = cart.filter(
          existingJob => existingJob.id !== job.id
        )
        exists.quantity = exists.quantity + 1
        newCart = [...rest, exists]
      }
  

  // const handleAddToCart = product => {
  //   let newCart = []
  //   const exists = cart.find(
  //     existingProduct => existingProduct.id === product.id
  //   )
  //   if (!exists) {
  //     product.quantity = 1
  //     newCart = [...cart, product]
  //   } else {
  //     const rest = cart.filter(
  //       existingProduct => existingProduct.id !== product.id
  //     )
  //     exists.quantity = exists.quantity + 1
  //     newCart = [...rest, exists]
  //   }

    setCart(newCart)
    addToDb(job.id);
    
  }

    console.log("c",cart)
    console.log("all",allJobs);

    const {id}=useParams();
    console.log("single", id);
    const [singleData, setSingleData] = useState({});
    

    
    useEffect(() => {
        if(allJobs){
          const matchedJob=allJobs.find(job=>job.id==id);
          
          setSingleData(matchedJob);
        }
        
      }, []);
      
      console.log("data",singleData);
      const {companyName, jobDescription, jobTitle, location, salary, jobResponsibility, educationalRequirements, experiences, contactInformation }=singleData;
    
    return (
        <div className='container-space'>
            <h1 className='text-center text-3xl text-blue-400'>Job Details</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16  py-16'>
              <div className='space-y-2 text-justify '>
                <h1 className='font-bold text-xl'>Job Description: <span className='font-normal'>{jobDescription}</span></h1>
                <h1 className='font-bold text-xl py-4'>Job Responsibility: <span className='font-normal'>{jobResponsibility}</span></h1>
                <h1 className='text-xl font-bold py-4'>Educational Requirements: <span className='font-normal'>{educationalRequirements}</span></h1>
                <h1 className='font-bold text-xl py-4'>Experience: <span className='font-normal'>{experiences}</span></h1>
              </div>
              <div>
                <div className='bg-blue-200 rounded-lg px-16'>
                  <h1 className='font-bold pt-4 pb-4 text-xl' >Job Details</h1>

                  <h1 className='font-bold  py-4'>Salary: <span className='font-normal'>{salary}</span></h1>
                  <h1 className='font-bold  py-4'>Job Title: <span className='font-normal'>{jobTitle}</span></h1>
                  <h1 className='font-bold pt-6 pb-4 text-xl' >Contact Information</h1>
                  <h1 className='font-bold  py-4'>Phone: <span className='font-normal'>{contactInformation?.phone}</span></h1>
                  <h1 className='font-bold  py-4'>Email: <span className='font-normal'>{contactInformation?.email}</span></h1>
                  <h1 className='font-bold  py-4'>Address: <span className='font-normal'>{location}</span></h1>
                  
                </div>
                <Link to='/appliedjobs' className='text-center pt-6'>
                  <button className='btn-primary' onClick={()=>handleAddToCart(singleData)}>Apply Now</button>
                </Link>
              </div>
            </div>
        </div>
    );
};

export default SingleJob;