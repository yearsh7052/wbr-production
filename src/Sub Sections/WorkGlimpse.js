import React, { useEffect } from 'react'
import WorkShowCase from '../Screen Components/WorkShowCase'

function WorkGlimpse() {



  return (
    <div
    className={`self-stretch [background:linear-gradient(180deg,_#d9d4e6,_#fff)] overflow-hidden flex flex-col items-center justify-center py-[50px]  text-center text-53xl  text-darkslateblue-100 font-cormorant-garamond px-5 sphn:px-2 phn:px-5 xl:text-33xl lg:text-23xl
      xl:py-10 lg:py-5 
      `}
  >
    <div className="flex flex-row items-center justify-center gap-10 lg:gap-5 tab:gap-2">
      <div className="w-2.5 h-2.5 phn:w-3 phn:h-2 relative rounded-981xl bg-darkslateblue-100 " />
        <span className=' phn:leading-0'>A Glimpse into Our Work</span>
      <div className="w-2.5 phn:w-3 phn:h-2 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
    </div>
    <div className="flex flex-col items-start justify-start gap-[100px] text-left text-81xl text-white phn:gap-[50px] xl:px-20 tab:px-0 phn:px-0 sphn:px-2">

    <WorkShowCase className="  [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] 
     opacity-[0]" heading={"STYLIST"} VIDEO_LINK={'/stylist.mp4'} ImgLink={"/3-top-a--1@2x.png"}/>

    <WorkShowCase className="  [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right] 
     opacity-[0]" heading={"VISIONARY"} VIDEO_LINK={'/vision.mp4'} ImgLink={"/WorkImg2.png"}/>

    <WorkShowCase className="  [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] 
     opacity-[0]" heading={"PRODUCER"} VIDEO_LINK={'/produce.mp4'} ImgLink={"/WorkImg3.png"}/>
    </div>
  </div>
  )
}

export default WorkGlimpse