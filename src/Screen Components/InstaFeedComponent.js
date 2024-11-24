import React from 'react'

function InstaFeedComponent( { ImgLink, ImgObj }  ) {
  return (
    <div className="h-[300px] w-[300px] relative">
    <div className="absolute top-[13.6px] left-[0px] border-white border-[5px] border-solid box-border w-[270px] h-[270px] overflow-hidden [transform:_rotate(-3deg)] [transform-origin:0_0]" />
    <div className='absolute top-[calc(50%_-_129.65px)] left-[calc(50%_-_129.55px)] w-[270px] h-[270px] overflow-hidden
    
    '>
    <img
      className={`w-full h-full  ${ImgObj} 
      transform transition-all duration-500 hover:scale-110 filter grayscale hover:grayscale-0 phn:grayscale-0`}
      alt=""
      src={ImgLink}
    />
    </div>
  </div>
  )
}

export default InstaFeedComponent

{/* <div className="h-[273.3px] w-[273.3px] relative">
  <div className="absolute top-[13.6px] left-[0px] border-white border-[5px] border-solid box-border w-[260px] h-[260px] overflow-hidden [transform:_rotate(-3deg)] [transform-origin:0_0]" />
  <img
    className="absolute top-[calc(50%_-_129.65px)] left-[calc(50%_-_129.55px)] w-[258.6px] h-[258.6px] object-contain transform transition-transform duration-500 hover:scale-110"
    alt=""
    src={ImgLink}
  />
</div> */}

//   src="/446545536-3733818463572258-8220911656191259836-n-11@2x.png"
//      src="/446545536-3733818463572258-8220911656191259836-n-12@2x.png"


// ANimation Part 
// transform transition-colors duration-500 hover:bg-black