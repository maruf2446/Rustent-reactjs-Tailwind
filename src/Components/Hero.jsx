import React from 'react';

const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                {/* Ovverlay */}
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/10 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className=''>Best</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className=''>Foods</span> Delivered</h1>
                </div>
                    <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    );
};

export default Hero;