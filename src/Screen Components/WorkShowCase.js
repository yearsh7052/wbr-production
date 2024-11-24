import React, { useEffect } from 'react'

function WorkShowCase( { ImgLink, heading, VIDEO_LINK, className } ) {

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );
    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);


  return (
    <div    data-animate-on-scroll className={`w-[1000px] flex items-center justify-center relative h-[650px] lg:w-full lg:h-auto ${className}`}  >
        <div className=" hidden lg:flex absolute  z-40 tab:text-[42px] sphn:text-8xl
    ">
      {heading}
    </div>
    <div className="absolute top-[0px] left-[29.4px] [filter:blur(20px)] bg-mediumpurple-200 w-[1000px] h-[562.5px] [transform:_rotate(3deg)] [transform-origin:0_0]
    lg:w-full lg:h-full lg:mr-5 overflow-hidden cursor-pointer
    "
    />

    <img
      className=" absolute top-[17.4px] left-[8.7px] w-[1000px] h-auto object-contain lg:w-full lg:relative transform transition-all duration-300 hover:scale-105 cursor-pointer filter grayscale hover:grayscale-0 phn:grayscale-0  " 
      alt=""
      src={ImgLink}
    />

<video 
      className={`hidden absolute top-[17.4px] left-[8.7px] w-[1000px] h-auto transition-transform duration-1000} lg:w-full lg:relative  `}
      autoPlay
      muted
      loop
      >
      <source src={VIDEO_LINK} type="video/mp4" />
    </video>

    
    <div className="absolute top-[298.1px] left-[300px] leading-[75px] 
    lg:hidden
    ">
      {heading}
    </div>
  </div>
  )
}

export default WorkShowCase

{/* <div className="w-[1028.1px] relative h-[614.1px]">
<div className="absolute top-[52.3px] left-[0px] [filter:blur(20px)] bg-mediumpurple-200 w-[1000px] h-[562.5px] [transform:_rotate(-3deg)] [transform-origin:0_0]" />
<img
  className="absolute top-[16.4px] left-[8.7px] w-[1009.7px] h-[579.9px] object-contain"
  alt=""
  src="/3-top-a--11@2x.png"
/>
<div className="absolute top-[calc(50%_-_37.05px)] left-[calc(50%_-_262.05px)] leading-[75px]">
  VISIONARY
</div>
</div> */}