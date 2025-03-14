import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogSection = () => {
  return (
    <section className="bg-white py-8 relative">
        <Image src="/assets/leaf3.svg" width={80} height={80} className='absolute left-[70%]'/>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
       <p className='mb-3'> <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Our Blog</span></p>
        <div className='w-auto'>
        <h2 className="text-3xl lg:text-5xl font-bold text-[#212337] mb-4">Fresh Harvest Blog</h2>
          <p className="text-[#4A4A52] text-xs lg:text-[14px] ">
            Welcome to the Fresh Harvest Blog, your go-to resource for all things <br /> related to fresh produce, healthy eating, and culinary inspiration.
          </p>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   
          <div className="rounded-lg  overflow-hidden">
            <Image 
              src="/assets/b2.svg" 
              alt="Exploring Seasonal Delights" 
              className="w-full h-auto object-cover"
              width={100}
              height={100} 
              
            />
            <div className=" pt-6 text-[18px]">
              <p className=" font-light text-[#4A4A52] mb-2">May 23, 2024</p>
              <h3 className=" font-bold text-[#212337] mb-2">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h3>
              <Link href="#" className="text-[#FF6A1A] font-semibold hover:underline">Read More →</Link>
            </div>
          </div>

        
          <div className="rounded-lg  overflow-hidden">
            <Image 
              src="/assets/b1.svg" 
              alt="Exploring Seasonal Delights" 
              className="w-full h-auto object-cover"
              width={100}
              height={100} 
              
            />
            <div className=" pt-6 text-[18px]">
              <p className=" font-light text-[#4A4A52] mb-2">May 23, 2024</p>
              <h3 className=" font-bold text-[#212337] mb-2">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h3>
              <Link href="#" className="text-[#FF6A1A] font-semibold hover:underline">Read More →</Link>
            </div>
          </div>

        
          <div className="rounded-lg  overflow-hidden">
            <Image 
              src="/assets/b.svg" 
              alt="Exploring Seasonal Delights" 
              className="w-full h-auto object-cover"
              width={100}
              height={100} 
              
            />
            <div className="pt-6 text-[18px]">
              <p className=" font-light text-[#4A4A52] mb-2">May 23, 2024</p>
              <h3 className=" font-bold text-[#212337] mb-2">Exploring Seasonal Delights: A Guide to What's Fresh Right Now</h3>
              <Link href="#" className="text-[#FF6A1A] font-semibold hover:underline">Read More →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;