import React from 'react'
import FrameComponent2 from '../components/FrameComponent2'
import FrameComponent3 from '../components/FrameComponent3'
import FrameComponent4 from '../components/FrameComponent4'
import StoriesFrame1 from '../Screen Components/StoriesFrame1'
import StoriesFrame2 from '../Screen Components/StoriesFrame2'
import StoriesFrame3 from '../Screen Components/StoriesFrame3'

function StoriesSection() {
  return (
    <div className="w-full [background:linear-gradient(180deg,_#d9d4e6,_#fff)] overflow-hidden flex flex-col items-center justify-center py-[50px] px-2.5 box-border gap-10 
    tab:py-5  tab:gap-5 phn:gap-1 phn:px-2 xl:text-33xl lg:text-23xl
    ">

      {/* Heading */}
    <div className="flex flex-row items-center justify-center gap-10">
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      <div className="relative">Blogs</div>
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
    </div>

    <div className="w-[1440px] flex flex-col items-center justify-end gap-[200px] xl:gap-[100px] tab:gap-[50px] xl:w-full">
    <StoriesFrame1/>
    <StoriesFrame2/>
    <StoriesFrame3/>
    </div>
  </div>
  )
}

export default StoriesSection
