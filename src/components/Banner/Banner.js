import React from 'react';
import pic from '../../images/examImage.jpeg'
const Banner = () => {
    return (
        <div className='flex justify-center items-center bg-cover bg-center h-screen' style={{backgroundImage: `url(${pic})`, height: '450px'}}>
           
        <div className='text-white space-y-4 bg-black bg-opacity-10 p-6 rounded-lg'>
            <h1 className='text-3xl font-bold'>Welcome To My Site</h1>
            <p className='text-xl'>There are four topics in my  quize website. <br/> Such as js,css,react js, git <br/>
            These topics related with web design </p>
            <div className='flex justify-center items-center'>
            <button className='bg-sky-500 px-6 py-2 rounded-lg text-xl'>Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;