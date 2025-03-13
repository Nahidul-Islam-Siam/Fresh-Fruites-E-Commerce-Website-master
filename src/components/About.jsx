import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className='py-24'>
    <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-between">
            <div className="flex-1" >
                <Image src='/assets/about-img.png' alt='banner subject image' width={686} height={657} priority />
            </div>

            <div className="flex-1" >
                <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>About us</span>
                <h2 className='text-3xl md:text-5xl font-bold text-[#212337] py-4 '>About Fresh Harvest</h2>
                <p className="text-[#4A4A52]  leading-6 mb-8 md:pr-48">Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
                <button className='py-4 px-8 text-lg font-medium rounded-md text-[#FF6A1A] border border-[#FF6A1A]'>Shop Now</button>
            </div>
        </div>
    </div>
</div>
  );
};

export default AboutUs;
