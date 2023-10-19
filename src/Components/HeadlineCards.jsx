import React from 'react';

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* card */}
            <div className='rounded-xl relative'>
                {/* Overly */}
                <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                    <p className='text-2xl font-bold px-2 pt-4'>Salat</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border border-white px-5 py-2 bg-white text-black mx-2 absolute bottom-4 md:flex items-center rounded-full'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overly */}
                <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                    <p className='text-2xl font-bold px-2 pt-4'>French fries</p>
                    <p className='px-2'>Through 11/30</p>
                    <button className='border border-white px-5 py-2 bg-white text-black mx-2 absolute bottom-4 md:flex items-center rounded-full'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <div className='rounded-xl relative'>
                {/* Overly */}
                <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                    <p className='text-2xl font-bold px-2 pt-4'>Pasta</p>
                    <p className='px-2'>Through 16/35</p>
                    <button className='border border-white px-5 py-2 bg-white text-black mx-2 absolute bottom-4 md:flex items-center rounded-full'>Order Now</button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
        </div>
    );
};

export default HeadlineCards;