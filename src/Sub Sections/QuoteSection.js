import React, { useEffect } from 'react'
import DarkBluePoloroids from '../Screen Components/Dark-Blue-Poloroids'

function QuoteSection() {

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
    <div
    data-animate-on-scroll
    className={`self-stretch [background:linear-gradient(180deg,_#fff,_#d9d4e6)] overflow-hidden flex flex-col items-center justify-center py-5 px-10  gap-10 text-center text-53xl text-darkslategray font-cormorant-garamond 
      tab:px-2 tab:gap-5 phn:text-23xl 
     [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] 
     opacity-[0] `}
  >
    
    <div className="self-stretch flex flex-row items-center justify-start gap-5 text-sm phn:gap-2">
      <div className="relative font-semibold">Weddings by Rishabh</div>
      <div className="flex-1 relative bg-lavender-100 h-0.5 overflow-hidden" />
      <div className="relative font-semibold">Established Since</div>
      <div className="flex-1 relative bg-lavender-100 h-0.5 overflow-hidden" />
      <div className="relative font-semibold">2015</div>
    </div>
    <div className="relative font-semibold text-lavender-100">{`Beyond Planning `}</div>
    <div className="relative font-semibold text-darkslateblue-100 hidden phn:block">
      We create symphony
    </div>

    <div className="flex flex-row items-start justify-center gap-10 
    xl:flex-wrap lg:px-20 tab:px-0 ">
    <DarkBluePoloroids ImgLink={'/image-97@2x.png'}/>
    <DarkBluePoloroids ImgLink={'/QuoteImg2.png'}/>
    <DarkBluePoloroids ImgLink={'/QuoteImg3.png'} />
    <DarkBluePoloroids ImgLink={'/QuoteImg4.png'} />
    <DarkBluePoloroids ImgLink={'/QuoteImg5.png'} />
    </div>
    <div className="relative font-semibold text-darkslateblue-100 phn:hidden">
      We create symphony
    </div>
  </div>
  )
}

export default QuoteSection

// [&.animate]:animate-[2s_ease_0s_1_normal_forwards_slide-in-left]
