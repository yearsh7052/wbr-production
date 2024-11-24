import React from 'react'
import InstaFeedComponent from '../Screen Components/InstaFeedComponent'

function InstaFeedSection() {
  return (
    <div
    className={`w-full [background:linear-gradient(180deg,_#fff,_#d9d4e6)] overflow-hidden flex flex-col items-center justify-center py-[50px] px-5 box-border gap-10 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond
      xl:text-33xl lg:text-23xl tab:py-5 tab:gap-5 phn:gap-1 phn:px-2
      `}
  >
    <div className="flex flex-row items-center justify-center gap-10">
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      <div className="relative ">Instagram Feed</div>
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
    </div>

    <div className="w-[1440px] flex flex-row items-cemter justify-center flex-wrap content-start gap-[50px] xxl:w-full tab:gap-5">
    <InstaFeedComponent ImgObj={"object-contain"} ImgLink={"/446545536-3733818463572258-8220911656191259836-n-1@2x.png"} />
    <InstaFeedComponent ImgObj={"object-cover"} ImgLink={"/InstaImg2.png"} />
    <InstaFeedComponent ImgObj={"object-cover"} ImgLink={"/InstaImg3.png "} />
    <InstaFeedComponent ImgObj={"object-none"} ImgLink={"/InstaImg4.png "} />
    <InstaFeedComponent ImgObj={"object-none"} ImgLink={"/InstaImg9.webp "} />
    <InstaFeedComponent ImgObj={"object-contain"} ImgLink={"/InstaImg6.heic"} />
    
    </div>
  </div>
  )
}

export default InstaFeedSection