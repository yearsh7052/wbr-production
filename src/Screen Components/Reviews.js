import React from 'react'

function Reviews({review, name, countVal, setCountVal, count}) {
  return (
    <div style={countVal === count ? {display : 'flex'} : {display: 'none'} } className="self-stretch flex flex-col items-start justify-center gap-5 z-[0]">
        <div className="self-stretch relative leading-[25px]">
       {review}
        </div>
        <div className="flex flex-col items-center justify-center py-0 px-[25px] text-left text-8xl text-gray-400 font-stay-classy-duo-serif">
          <div className="relative">by {name}</div>
        </div>
      </div>
  )
}

export default Reviews