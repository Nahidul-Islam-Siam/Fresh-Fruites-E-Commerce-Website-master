import Image from 'next/image';
import React from 'react';

export default function SpecialOffer() {
  return (
    <div 
      className="relative flex items-center justify-center w-full bg-cover bg-center" 
      style={{
        height: "400px", 
        backgroundImage: "url('/assets/specialOfferBg.png')",
        backgroundBlendMode: 'overlay',
      }}
    >

      <Image src="/assets/g2.svg" width={80} height={80} alt="Decoration 1" className="absolute bottom-0 left-5" />
      <Image src="/assets/g1.svg" width={300} height={300} alt="Decoration 2" className="absolute right-3 top-20" />
      <Image src="/assets/g.svg" width={400} height={400} alt="Decoration 3" className="absolute top-0 right-0" />


      <div className="">
        <Image src="/assets/clip-path0group.png" width={500} height={500} alt="Main Visual" className="absolute bottom-0 left-0" />
      </div>
    </div>
  );
}
