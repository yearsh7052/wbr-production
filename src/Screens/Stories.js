import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Screen Components/Navbar'

import Footer from '../Screen Components/Footer'
import StoriesSection from '../Sub Sections/StoriesSection'



function Stories() {

 
  return (
    <div className="w-full relative flex flex-col items-center justify-center text-center text-53xl text-darkslateblue-100 font-cormorant-garamond ">
    <Navbar location={'/stories'}/>
    {/* Top Section  */}
    <div className='w-full bg-lavender-100 '>
    <img
            className="self-stretch flex-1  w-full overflow-hidden  object-cover tab:h-[500px] phn:h-[450px] "
            alt=""
            src="/stories 1.jpg"
    />

    {/* Heading */}
    <div className='text-81xl w-full  mt-[-200px] text-white font-cormorant-garamond font-semibold
    tab:text-53xl phn:text-23xl hidden '>
    Blogs
    </div>
    </div>
    <StoriesSection/>
    <Footer/>
    </div>
  )
}

export default Stories
