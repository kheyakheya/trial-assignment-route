import React from 'react';
import handshake from '../../assets/career-banner.jpg'

const Banner = () => {
    return (
        <div className='container-space  flex flex-col md:flex-row md:justify-around items-center '>
            <div>
                <h2 className='text-5xl text-blue-400 font-bold'>Dream Job Comes True</h2>
                <h2 className='py-2 text-5xl'>It's your Chance</h2>
                <p className='my-5'>Explore different fields and apply where you fit. We are here to help you. <br></br>Just Click the buttons to reach us.</p>
                <button className='btn-primary'>Get Started</button>
            </div>

            <div>
                <img className='w-80 h-72 rounded-md my-4' src={handshake} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;