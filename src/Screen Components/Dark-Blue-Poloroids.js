import React from 'react'

function DarkBluePoloroids( { ImgLink } ) {
  return (
    <div className="bg-darkslateblue-200 overflow-hidden flex flex-row items-center justify-start pt-2.5 px-2.5 pb-[30px]    phn:w-full">
    <img
      className="w-[230px] relative h-auto object-cover  transform transition-all duration-500 hover:scale-150 cursor-pointer
      xxl:w-[180px] xl:w-[150px] 
      phn:w-full phn:h-[300px]
      "
      alt=""
      src={ImgLink}
    />
  </div>
  )
}

export default DarkBluePoloroids