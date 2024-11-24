import React from 'react'
import { useNavigate } from 'react-router-dom'

function PhnHamMenu({ phnMenuDisplayStatus , setPhnMenuDisplayStatus  }) {

  const navigate = useNavigate()
  return (
<aside
onClick={()=>setPhnMenuDisplayStatus(!phnMenuDisplayStatus)}
id="default-sidebar" class={`flex items-end justify-end  fixed top-0 right-0 z-40 w-full h-screen transition-transform  ${phnMenuDisplayStatus ? 'translate-x-0' : 'translate-x-full' } bg-transparent text-8xl` } aria-label="Sidebar">


<div className="self-stretch border-whitesmoke-300 border-t-[0.5px] border-solid flex flex-col items-start justify-start  px-10 py-10 gap- text-lg font-poppins lg:justify-between text-dark-blue bg-white w-[200px]">

          <div className="flex flex-col w-full items-start justify-start gap-0 text-[16px] ">
            <div 
            // onClick={()=>{navigate('/')}}
            className="flex flex-row items-start justify-start cursor-pointer py-4 text-3xl border-b-[1px] border-solid w-full">
            <div className="relative font-semibold">Menu</div>
            </div>
            <div 
            onClick={()=>{navigate('/')}}
            className="flex flex-row items-center justify-center cursor-pointer py-4 ">
            <div className="relative font-semibold">Home</div>
            </div>
            <div 
            onClick={()=>{navigate('/Portfolio')}}
            className="flex flex-row items-center justify-center cursor-pointer gap-2  py-4">
            <div className="relative font-semibold">Portfolio</div>
            </div>
            <div 
            onClick={()=>{navigate('/ClientSpeaks')}}
            className="flex flex-row items-center justify-center cursor-pointer gap-2 py-4">
            <div className="relative font-semibold">ClientSpeaks</div>
            </div>
            <div 
            onClick={()=>{navigate('/Services')}}
            className="flex flex-row items-center justify-center cursor-pointer py-4">
            <div className="relative font-semibold">Services</div>
            </div>
            <div 
            onClick={()=>{navigate('/Stories')}}
            className="flex flex-row items-center justify-center cursor-pointer py-4">
            <div className="relative font-semibold">Stories</div>
            </div>
            <div 
            onClick={()=>{navigate('/aboutus')}}
            className="flex flex-row items-center justify-center cursor-pointer py-4">
            <div className="relative font-semibold">About Us</div>
            </div>
          </div>
        </div>
</aside>
  )
}

export default PhnHamMenu