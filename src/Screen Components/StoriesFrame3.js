import React, { useEffect } from 'react'

function StoriesFrame3() {

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
    {/* Desktop Version */}
    <div
        data-animate-on-scroll
    className={`self-stretch flex flex-row items-end justify-center gap-5 text-left text-23xl text-gray-100 font-cormorant-garamond lg:flex-col lg:items-center  px-5 lg:hidden 
      [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom]  opacity-[0]
      
      `}
  >

    {/* First Section  */}
    <img
      className="w-[350px] relative h-[650px] object-cover
        xxl:max-w-[300px]  xxl:h-[600px]
        xl:w-[250px] xl:h-[500px] lg:hidden"
      alt=""
      src="/3-top-c-12@2x.png"
    />

    {/* Second Section  */}
    <div className="flex flex-col items-start justify-end gap-5 
    max-w-[600px]
    xxl:max-w-[500px]
    xl:max-w-[400px] lg:hidden
    ">
      <div className="self-stretch relative font-semibold xl:text-13xl">
        Creating a Stunning Wedding Reception Table Setting
      </div>
      <img
        className="w-[600px] relative h-[550px] object-cover
        xxl:w-[500px] xxl:h-[480px]
        xl:w-[400px] xl:h-[400px]"
        alt=""
        src="/3-top-c-22@2x.png"
      />
    </div>

    {/* Last Section  */}
    <div className="flex flex-col items-start justify-start gap-5 text-3xl text-gray-200 font-poppins
    max-w-[350px] xxl:max-w-[300px] xl:max-w-[250px] xl:gap-0
    ">
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative ">
          This beautifully decorated wedding reception table is a perfect
          example of how to create a stylish and welcoming atmosphere.
        </div>
      </div>
      <img
        className="w-[350px] relative h-[400px] object-cover
        xxl:w-[300px] xxl:h-[350px]
        xl:w-[250px] xl:h-[270px]"
        alt=""
        src="/3-top-c-32@2x.png"
      />
    </div>
  </div>

  {/* Tab Version */}
    <div className={`hidden self-stretch  flex-row items-center justify-center gap-5 text-left text-23xl text-gray-100 font-cormorant-garamond lg:flex-col lg:items-center  lg:flex `}
  >



    {/* First Section  */}
    <div className="flex flex-col items-start justify-end gap-5 w-[720px] tab:w-full">
      <div className="self-stretch relative font-semibold xl:text-13xl">
        Creating a Stunning Wedding Reception Table Setting
      </div>
      <img
        className="w-full relative  object-cover"
        alt=""
        src="/3-top-c-22@2x.png"
      />
    </div>
    <div className="self-stretch  flex-row items-center justify-center text-3xl text-gray-200 font-poppins hidden tab:flex
   ">
        <div className="flex-1 relative tab:text-[17px]">
          This beautifully decorated wedding reception table is a perfect
          example of how to create a stylish and welcoming atmosphere.
        </div>
      </div>


    <div className={`flex flow-row gap-5 w-[720px] px-5 tab:hidden `}
  >

        {/* Second Section  */}
        <img
      className="w-[350px] relative object-cover"
      alt=""
      src="/3-top-c-12@2x.png"
    />

    {/* Last Section  */}
    <div className="flex flex-col items-start justify-start gap-5 text-3xl text-gray-200 font-poppins  xl:gap-0
    ">
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative ">
          This beautifully decorated wedding reception table is a perfect
          example of how to create a stylish and welcoming atmosphere.
        </div>
      </div>
      <img
        className="w-full h-full object-cover"
        alt=""
        src="/3-top-c-32@2x.png"
      />
    </div>
    </div>
  </div>
  </>
  )
}

export default StoriesFrame3