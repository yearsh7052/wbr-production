import React, { useState } from 'react'
import Reviews from '../Screen Components/Reviews'

function ClientSpeaksSection() {
  const [countVal, setCounVal]=useState(1)
  return (
    <div
    className={`w-full bg-lavender-100 overflow-hidden flex flex-col items-center justify-center pt-[50px] px-[100px] pb-[100px] box-border gap-10 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond lg:px-[50px] 
       tab:py-5  tab:gap-5 phn:gap-1 phn:px-2 xl:text-33xl lg:text-23xl
      `}
  >
    <div className="flex flex-row items-center justify-center gap-10 phn:gap-2">
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      <div className="relative ">Client Speaks</div>
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
    </div>

    <div className="self-stretch shadow-[0px_0px_30px_#94349d] bg-darkmagenta flex flex-col items-start justify-start py-[100px] px-[200px] relative gap-5 text-mid text-gray-300 font-optima-nova-lt-pro max-w-[1440px] mx-auto lg:px-[100px] tab:px-[50px] phn:px-[20px]">

    <Reviews  countVal={countVal} count={1} name={"Ritz"} review={" “Based on your blueprint, we'll assemble a dream team of talented professionals. From caterers and photographers to entertainers and artisans “"}/>

    <Reviews countVal={countVal} count={2} name={"Person"} review={" “Our wedding was everything we dreamed of, thanks to their incredible planning! Every detail was perfect, and we felt completely stress-free on the big day.“"}/>

    <Reviews countVal={countVal} count={3} name={"Person"} review={" “From the decorations to the timeline, they handled everything flawlessly. We couldn’t have asked for a better team to bring our vision to life! “"}/>

    <Reviews countVal={countVal} count={4} name={"Person"} review={" “Their attention to detail and creativity made our wedding truly magical. They took care of everything, and we just enjoyed every moment.“"}/>

    <Reviews countVal={countVal} count={5} name={"Person"} review={" “Highly recommend! They made the entire process smooth and stress-free. Every element was well-organized, and the day went off without a hitch.“"}/>

      
      <div className="!m-[0] absolute top-[256px] left-[calc(50%_-_90px)] flex flex-row items-center justify-start gap-5 z-[1] tab:bottom-0 ">
        <div style={countVal !== 1 ? {background : 'rgba(217, 212, 230, 0.15)'} : {backgroundColor : 'white'}} onClick={()=>setCounVal(1)} className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0 cursor-pointer" />
        <div style={countVal !== 2 ? {background : 'rgba(217, 212, 230, 0.15)'} : {backgroundColor : 'white'}} onClick={()=>setCounVal(2)} className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0 cursor-pointer" />
        <div style={countVal !== 3 ? {background : 'rgba(217, 212, 230, 0.15)'} : {backgroundColor : 'white'}} onClick={()=>setCounVal(3)} className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0 cursor-pointer" />
        <div style={countVal !== 4 ? {background : 'rgba(217, 212, 230, 0.15)'} : {backgroundColor : 'white'}} onClick={()=>setCounVal(4)} className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0 cursor-pointer" />
        <div style={countVal !== 5 ? {background : 'rgba(217, 212, 230, 0.15)'} : {backgroundColor : 'white'}} onClick={()=>setCounVal(5)} className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0 cursor-pointer" />
      </div>
    </div>
  </div>
  )
}

export default ClientSpeaksSection