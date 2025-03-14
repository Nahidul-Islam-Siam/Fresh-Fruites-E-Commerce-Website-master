import Image from 'next/image'

const Banner = () => {
  return (
    <div
      className="h-10/12 pt-36 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/assets/banner-bg.png'), linear-gradient(to right, transparent 0%, transparent 35%, transparent 35%, transparent 65%, #749B3F 65%, #749B3F 100%)",
        backgroundBlendMode: "overlay"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-11 md:gap-4 items-center justify-between">
          <div className="flex-1 banner-content relative md:-mt-36" >
            <span className='text-sm md:text-xl font-medium text-[#749B3F] bg-[#749B3F1A] py-1.5 px-3 rounded-md'>Welcome to Fresh Harvest</span>
            <h2 className='text-5xl md:text-[80px] font-bold text-[#212337] py-4 pr-10 md:pr-0 leading-16 md:leading-25'>Fresh Fruits and Vegetables</h2>
            <p className="text-sm md:text-no text-[#4A4A52] md:pr-56 leading-6 mb-6 md:mb-8">At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
            <button className="px-6 py-3 border-2 hover:bg-white border-[#FF6A1A] hover:text-[#FF6A1A] rounded-md bg-orange-600 text-white transition-all">
              See All Products
            </button>

            <div className="">
              <Image
                src="/assets/clip-path-group.png"
                alt='banner subject image'
                className='absolute  left-5 md:left-32 hidden md:block'
                width={55}
                height={38}
                priority />
              <Image
                src="/assets/leaves.png"
                alt='banner subject image'
                className='absolute md:-bottom-36 md:-left-14 hidden md:block'
                width={67}
                height={51}
                priority />
              <Image
                src="/assets/special-offer.png"
                alt='banner subject image'
                className='absolute top-[300px] md:top-[420px] right-0 md:right-14 w-[191px] h-[91px] md:w-[331px] md:h-[157px]'
                width={331}
                height={157}
                priority />
            </div>

            <div className="absolute -bottom-[450px] md:-bottom-56">
              <p className='text-black pb-4'>Download App:</p>
              <div className="flex items-center gap-5">
                <Image
                  src="/assets/appstore.png"
                  alt='banner subject image'
                  className=''
                  width={138}
                  height={40}
                  priority />
                <Image
                  src="/assets/googleplay.png"
                  alt='banner subject image'
                  className=''
                  width={138}
                  height={40}
                  priority />
              </div>
            </div>
          </div>
          <div className="flex-1 banner-img">
            <Image src='/assets/banner-img.png'
              alt='banner subject image'
              className='w-[434px] h-[473px] md:w-[695px] md:h-[758px] mr-0'
              width={695}
              height={758}
              priority />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;