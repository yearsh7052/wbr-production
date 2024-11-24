import React from 'react'
import FeaturedOnComponent from '../Screen Components/FeaturedOnComponent'

function FeaturedOnSection() {
  return (
    <div
    className={`w-full bg-white overflow-hidden flex flex-col items-center justify-center py-[50px] px-[100px] box-border gap-10 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond xl:px-[50px]
            tab:py-5  tab:gap-5 phn:gap-1 phn:px-2 xl:text-33xl lg:text-23xl
      `}
  >
    <div className="flex flex-row items-center justify-center gap-10 phn:gap-5">
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      <div className="relative ">Featured On</div>
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
    </div>
    <div className="self-stretch flex flex-row items-start justify-start gap-10 text-left text-mid text-gray-500 font-optima-nova-lt-pro 
    lg:gap-5 max-w-[1440px] mx-auto xl:flex-wrap lg:items-center tab:justify-center overflow-hidden ">

      <FeaturedOnComponent prop="4.0 " image61="/image-61@2x.png" />
      <FeaturedOnComponent
        prop="4.5 "
        image61="/image-62@2x.png"
        propWidth="235px"
        propHeight="44px"
      />
      <div className="flex-1 shadow-[0px_0px_20px_rgba(217,_212,_230,_0.25)]  h-[250px] flex flex-col items-start justify-start p-[50px] box-border 
      max-w-[350px] min-w-[300px] bg-lavender-100  tab:w-full tab:max-w-full sphn:max-w-[250px] gap-5">
        <div className="self-stretch flex flex-col items-start justify-center">
          <div className="flex flex-row items-start justify-start gap-2.5">
            <div className="relative leading-[25px]">3</div>
            <div className="flex flex-row items-center justify-start gap-[5px]">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/solarstarbold.svg"
              />
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/solarstarbold.svg"
              />
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/solarstarbold.svg"
              />
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/solarstarbold1.svg"
              />
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/solarstarbold1.svg"
              />
            </div>
          </div>
        </div>
        <div className="relative text-8xl font-stay-classy-duo-serif text-gray-600">
          good
        </div>
        <img
          className="w-[228px] relative h-[43px] object-cover"
          alt=""
          src="/image-63@2x.png"
        />
      </div>
    </div>
  </div>
  )
}

export default FeaturedOnSection