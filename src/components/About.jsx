import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col items-center text-center bg-[#FFFFFF]">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16 w-full">

    
        <div className="md:w-1/2 relative flex justify-center">
       
          <div className="absolute inset-0 bg-[url('/assets/bg-pattern.svg')] bg-cover bg-center opacity-20 rounded-lg"></div>

  
          <Image
            src="/assets/about_us.svg"
            alt="About Us"
            width={500}
            height={400}
            className="relative z-10 rounded-lg shadow-lg"
          />
        </div>

   
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-left">
          

          <button className="bg-[#749B3F1A] text-[#749B3F] font-semibold py-2 px-4 rounded-md mb-4">
            About Us
          </button>

  
          <h1 className="font-bold text-[48px] text-[#212337] sm:text-4xl md:text-5xl mb-4">
            About Fresh Harvest
          </h1>

    
          <p className="text-[#828282] text-sm sm:text-xl max-w-lg">
            Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.
          </p>

       
          <div className="w-full flex justify-start mt-6">
            <button className="bg-[#FF6A1A] text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg hover:bg-[#e65a00] transition-all">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutUs;
