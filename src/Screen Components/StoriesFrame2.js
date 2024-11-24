import React, { useEffect } from 'react'

function StoriesFrame2() {

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
    <>
    {/* Desktop */}
    <div className={`flex self-stretch flex-row items-start justify-center gap-5 text-left text-3xl text-gray-200 font-poppins lg:hidden `}
  >

    {/* First Section  */}
    <div
    data-animate-on-scroll
    className=" max-w-[350px] xxl:max-w-[300px] xl:max-w-[250px] self-stretch flex flex-col items-start justify-start gap-5 px-0 pb-0
    xl:gap-2
    [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left]  opacity-[0]
    ">
      <div className="flex flex-row items-center justify-center">
        <div className="relative xl:text-[17px]
        ">
          {`This serene outdoor wedding ceremony space is a perfect example of how to create a peaceful and intimate atmosphere. `}</div>
      </div>
      <img
        className=" h-[400px] object-cover
        xxl:w-[300px] xxl:h-[350px]
        xl:w-[250px] xl:h-[350px]
        "
        alt=""
        src="/3-top-c-31@2x.png"
      />
    </div>

    {/* Second Section  */}
    <img
      className="w-[600px] relative h-[650px] object-cover
        xxl:w-[500px] xxl:h-[550px]
        xl:w-[400px] xl:h-[500px]
      "
      alt=""
      src="/3-top-c-21@2x.png"
    />

    {/* Third Section  */}
    <div
     data-animate-on-scroll
    className=" max-w-[350px] xxl:max-w-[300px] flex flex-col items-start justify-start gap-5 text-23xl text-gray-100 font-cormorant-garamond xxl:gap-0
     [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-right]  opacity-[0]
    ">
      <img
        className="w-[350px] relative h-[400px] object-cover
              xxl:w-[300px] xxl:h-[350px]
        xl:w-[250px] xl:h-[300px
        "
        alt=""
        src="/3-top-c-11@2x.png"
      />
      <div className="flex flex-row items-center justify-center">
        <div className=" relative font-semibold ">
          <p className="m-0 xl:text-13xl">{`A Sacred Space: Creating a Tranquil Wedding Ceremony `}</p>
        </div>
      </div>
    </div>
  </div>


  {/* ---------------------- Tab Section ---------------------- */}
  <div className={`hidden self-stretch  flex-col items-center justify-center gap-5 text-left text-3xl text-gray-200 font-poppins lg:flex `}
  >

    <div className='flex flow-row gap-5 w-[720px] px-5 tab:hidden'>
    {/* First Section  */}
    <div className="  self-stretch flex flex-col items-center justify-center gap-5 px-0 pb-0
    xl:gap-2
    ">
      <div className="flex flex-row items-center justify-center">
        <div className="relative xl:text-[17px]
        ">
          {`This serene outdoor wedding ceremony space is a perfect example of how to create a peaceful and intimate atmosphere. `}</div>
      </div>
      <img
        className=" h-[400px] object-cover
        w-full
        "
        alt=""
        src="/3-top-c-31@2x.png"
      />
    </div>

    {/* Second Section  */}
    <div className="w-full  flex flex-col items-start justify-start gap-5 text-23xl text-gray-100 font-cormorant-garamond xxl:gap-0">
      <img
        className="w-full relative h-auto object-cover
      
        "
        alt=""
        src="/3-top-c-11@2x.png"
      />
      <div className="flex flex-row items-center justify-center">
        <div className=" relative font-semibold ">
          <p className="m-0 xl:text-13xl">{`A Sacred Space: Creating a Tranquil Wedding Ceremony `}</p>
        </div>
      </div>
    </div>
    </div>

    {/* Third Section  */}
    <img
      className="w-[720px] relative h-[650px] object-cover tab:w-full tab:object-contain tab:h-auto
      "
      alt=""
      src="/3-top-c-21@2x.png"
    />
    <div className=" flex-row items-center justify-center text-gray-100 font-cormorant-garamond  hidden tab:flex max-w-[720px]">
        <div className=" relative font-semibold ">
          <p className="m-0 xl:text-13xl">{`A Sacred Space: Creating a Tranquil Wedding Ceremony `}</p>
        </div>
      </div>  

      <div className=" flex-row items-center justify-center hidden tab:flex max-w-[720px]">
        <div className="relative xl:text-[17px]
        ">
          {`This serene outdoor wedding ceremony space is a perfect example of how to create a peaceful and intimate atmosphere. `}</div>
      </div>

    {/* Third Section  */}
 
  </div>
  </>
  )
}

export default StoriesFrame2