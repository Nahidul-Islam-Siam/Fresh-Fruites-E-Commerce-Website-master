'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Pagination } from 'swiper/modules';

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 relative">


            <Image src="/assets/yellow.svg" width={60} height={60} alt="Decoration 3" className="absolute top-[32%] left-[30%]" />
      <Image src="/assets/leaf3.svg" width={80} height={80} className="absolute left-[80%] top-[15%]" />
      <Image src="/assets/leaf3.svg" width={80} height={80} className="absolute right-[80%] top-[15%]" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="mb-3">
            <span className="text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md">Testimonials</span>
          </p>
          <div className="w-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#212337] mb-4">What Our Customers Say</h2>
            <p className="text-[#4A4A52] text-xs lg:text-[14px]">
              Don't just take our word for it—here's what some of our customers have to <br /> say about their experience with Fresh Harvest:
            </p>
          </div>
        </div>
      </div>
  
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]} 
        className="mySwiper"
      >
  
        <SwiperSlide>
          <div className="mx-auto max-w-5xl gap-10 p-6 flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Image
                src="/assets/t.svg"
                alt="Jane Doe's Avatar"
                width={247}
                height={396}
                className="rounded-full"
              />
            </div>

            <div className="bg-[#F4F6F6] p-8 rounded-xl">
              <div className="mb-4">
                <p className="text-lg italic font-serif text-gray-800 leading-relaxed">
                  "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."
                </p>
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Jane Doe - Professional Chef
              </div>
            </div>
          </div>
        </SwiperSlide>

       
        <SwiperSlide>
          <div className="mx-auto max-w-5xl gap-10 p-6 flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Image
                src="/assets/t.svg"
                alt="Jane Doe's Avatar"
                width={247}
                height={396}
                className="rounded-full"
              />
            </div>

            <div className="bg-[#F4F6F6] p-8 rounded-xl">
              <div className="mb-4">
                <p className="text-lg italic font-serif text-gray-800 leading-relaxed">
                  "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."
                </p>
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Jane Doe - Professional Chef
              </div>
            </div>
          </div>
        </SwiperSlide>

   
        <SwiperSlide>
          <div className="mx-auto max-w-5xl gap-10 p-6 flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Image
                src="/assets/t.svg"
                alt="Jane Doe's Avatar"
                width={247}
                height={396}
                className="rounded-full"
              />
            </div>

            <div className="bg-[#F4F6F6] p-8 rounded-xl">
              <div className="mb-4">
                <p className="text-lg italic font-serif text-gray-800 leading-relaxed">
                  "I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."
                </p>
              </div>
              <div className="text-sm font-semibold text-gray-700">
                Jane Doe - Professional Chef
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

  
    </section>
  );
};

export default TestimonialSection;
