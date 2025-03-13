import Image from 'next/image'
import React from 'react'

export default function SpecialOffer() {
return (
    <div
        className="h-10/12 pt-36 bg-cover bg-center relative"
        style={{
            backgroundImage: "url('/assets/specialOfferBg.png')",
            backgroundBlendMode: "overlay"
        }}
    >
        <Image src='/assets/clip-path0group.png' wid  className="" />
    </div>
)
}
