import React, { useEffect, useState } from 'react'

function FixedImgSection() {

  return (
    <div
    className={`w-full overflow-hidden flex flex-col items-start justify-start`}
  >
    {/* Image sectoin */}
    <img
      className="w-full relative h-[1500px] object-none scale-105"
      alt=""
      src="/image@2x.png"
    />

    {/* Design section */}
    <div className={`w-full [background:linear-gradient(180deg,_rgba(137,_89,_174,_0.4),_rgba(137,_89,_174,_0.02)_50%,_rgba(137,_89,_174,_0.4))] overflow-hidden flex flex-col items-center justify-center py-11 px-0 box-border -mt-[1500px] z-10 h-screen tab:h-auto`}>
      
      <div className="flex flex-row items-center justify-center w-full tab:flex-col">
        <div className="w-[400px] h-[500px]  border-white border-[10px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-[25px]
         xl:w-[300px] xl:h-[400px]
        lg:w-[200px] lg:h-[300px]
        tab:w-[50%] tab:h-auto 
        ">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image1@2x.png"
          />
        </div>
        <div className="w-[650px]  h-[650px]  border-white border-[9.2px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-[25px] ml-[-100px] z-10
        xl:w-[550px] xl:h-[550px]
        lg:w-[450px] lg:h-[450px] 
        tab:ml-0 tab:w-[95%] tab:h-auto  tab:mt-[-100px]
        ">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/2-fa-c-1@2x.png"
          />
        </div>
        <div className="w-[400px] h-[500px] border-white border-[10px] border-solid box-border  overflow-hidden shrink-0 flex flex-row items-center justify-start p-[25px] ml-[-100px]
        xl:w-[300px] xl:h-[400px]
        lg:w-[200px] lg:h-[300px]
        tab:ml-0 tab:w-[50%] tab:h-auto  tab:mt-[-100px]
        ">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/2-fa-c-11@2x.png"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default FixedImgSection