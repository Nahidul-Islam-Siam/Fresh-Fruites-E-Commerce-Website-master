import Image from 'next/image';
import React from 'react';

export default function SpecialOffer() {
  return (
    <div 
      className="relative flex items-center justify-center w-full bg-cover bg-center" 
      style={{
        height: "600px", 
        backgroundImage: "url('/assets/specialOfferBg.png')",
        backgroundBlendMode: 'overlay',
      }}
    >
      <Image src="/assets/g2.svg" width={80} height={80} alt="Decoration 1" className="absolute bottom-0 left-0 z-20" />
      <Image src="/assets/g1.svg" width={500} height={500} alt="Decoration 2" className="absolute  right-[100px] hidden lg:block" />
      <Image src="/assets/g.svg" width={700} height={700} alt="Decoration 3" className="absolute top-0 right-0" />
      <Image src="/assets/leafe1.svg" width={120} height={120} alt="Decoration 3" className="absolute bottom-3 right-0" />
      <Image src="/assets/leafe2.svg" width={120} height={120} alt="Decoration 3" className="absolute top-3 left-[60%]   " />
      <Image src="/assets/yellow.svg" width={60} height={60} alt="Decoration 3" className="absolute top-[18%] left-[75%]   " />
      <div className="w-full mx-auto z-50 "> 
      <div className=" p-10 px-12 mx-auto text-center lg:text-left">
      <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Special Offer</span>
      
          <h2 className="text-[48px] lg:text-[80px] font-bold text-[#212337] ">Seasonal Fruit Bundle</h2>
          <p className="text-[32px] lg:text-[48px] font-semibold text-[#212337] mb-4">Discount up to <span className='text-[#FF6A1A]'>80% OFF</span> </p>

          <div className="flex justify-center lg:justify-start space-x-2 mb-4">
            <div className="flex flex-col items-center justify-center bg-white shadow rounded-md px-3 lg:px-5 lg:py-2">
              <span className="text-[28px] lg:text-[40px] font-bold text-[#212337] ">03</span>
              <span className="text-xs lg:text-lg text-[#4A4A52]">Days</span>
            </div>
            <div className="flex flex-col items-center bg-white shadow rounded-md px-5 py-2">
              <span className="text-[28px] lg:text-[40px] font-bold text-[#212337] ">18</span>
              <span className="text-xs lg:text-lg text-[#4A4A52]">Hour</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white shadow rounded-md px-3 lg:px-5 lg:py-2">
              <span className="text-[28px] lg:text-[40px] font-bold text-[#212337] ">54</span>
              <span className="text-xs lg:text-lg text-[#4A4A52]">Min</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white shadow rounded-md px-3 lg:px-5 lg:py-2">
              <span className="text-[28px] lg:text-[40px] font-bold text-[#212337] ">21</span>
              <span className="text-xs lg:text-lg text-[#4A4A52]">Second</span>
            </div>
          </div>

          <button className="bg-[#176D38]  text-24px lg:text-[32px]  text-white py-4 px-6 rounded-full text-center font-semibold">
            CODE: <span className='text-[#FF6A1A]'>FRUIT28</span> 
          </button>
        </div>
     
      </div>

      <Image src="/assets/clip-path0group.png" width={700} height={700} alt="Main Visual" className="absolute bottom-0 left-0" />
    </div>
  );
}