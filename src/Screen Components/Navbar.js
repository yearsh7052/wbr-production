import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhnHamMenu from './PhnHamMenu'

function Navbar( { location }) {
  const navigation = useNavigate()
  const [phnMenuDisplayStatus, setPhnMenuDisplayStatus]=useState(false)
  
  return (
    <div className=' fixed  top-5 bg-transparent w-full z-50 phn:top-2'>
    <div className="self-stretch bg-[#F6F5F4] overflow-hidden flex flex-row items-center justify-between py-[15px] px-[25px] xl:px-5 text-xl font-cormorant-garamond mx-5
     phn:px-2 phn:py-2 phn:mx-2">
    <img
      className="w-auto relative h-8 object-cover"
      alt=""
      src="/nav-logo.svg"
    />
    <div className="flex flex-row items-center justify-start gap-10 xl:gap-8 lg:hidden">
      <div
      onClick={()=>navigation('/')}
      className={`${location === "/" ? 'font-semibold text-mediumpurple-100' : ''} relative cursor-pointer`}>
        HOME
      </div>
      <div onClick={()=>navigation('/portfolio')} 
      className={`${location === "/portfolio" ? 'font-semibold text-mediumpurple-100' : ''} relative cursor-pointer`}>
        PORTFOLIO</div>
      <div onClick={()=>navigation('/clientspeaks')} 
      className={`${location === "/clientspeaks" ? 'font-semibold text-mediumpurple-100' : ''} relative cursor-pointer`}>
        CLIENT SPEAKS</div>
      <div onClick={()=>navigation('/services')} 
      className={`${location === "/services" ? 'font-semibold text-mediumpurple-100' : ''} relative cursor-pointer`}>
        SERVICES</div>
      <div onClick={()=>navigation('/stories')} 
      className={`${location === "/stories" ? 'font-semibold text-mediumpurple-100' : ''} relative cursor-pointer`}>
        STORIES</div>
      <div onClick={()=>navigation('/aboutus')} 
      className={`${location === "/aboutus" ? 'font-semibold text-mediumpurple-100' : ''} relative cursor-pointer`}>
        ABOUT US</div>
    </div>
    <div className="flex flex-row items-start justify-start gap-2.5 lg:hidden">
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/magex.svg"
      />
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/letsiconsinsta.svg"
      />
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/antdesignfacebookoutlined.svg"
      />
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/icbaselinewhatsapp.svg"
      />
    </div>

    {/* Ham Menu */}
    <div 
    onClick={()=>setPhnMenuDisplayStatus(!phnMenuDisplayStatus)}
      className="flex-col items-start justify-start p-[5px] hidden lg:flex">
              <div className="flex flex-row items-center justify-start">
                <div className="flex flex-row items-center justify-center">
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/burger-menu-svgrepo-com.svg"
                  />
                </div>
              </div>
            </div>
  </div>
  <PhnHamMenu     phnMenuDisplayStatus={phnMenuDisplayStatus}
    setPhnMenuDisplayStatus={setPhnMenuDisplayStatus}/>
  </div>
  )
}

export default Navbar