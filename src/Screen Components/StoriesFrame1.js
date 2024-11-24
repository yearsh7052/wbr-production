import React, { useEffect } from 'react'

function StoriesFrame1() {

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
    {/* Desktop and Tab section */}
    <div
      data-animate-on-scroll
    className={`self-stretch flex flex-row items-start justify-center gap-5 text-left text-23xl text-gray-100 font-cormorant-garamond lg:flex-col lg:items-center  px-5 tab:hidden
         [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-top]  opacity-[0]
      `}
  >
    
    {/* Section 1 */}
    <div

    className="max-w-[350px] xxl:max-w-[300px] xl:max-w-[250px] flex flex-col items-start justify-start gap-5 lg:hidden
    ">
      <img
      
        className="w-[350px] relative h-[370px] object-cover
        xxl:w-[300px] xxl:h-[320px]
        xl:w-[250px] xl:h-[270px]
        "
        alt=""
        src="/3-top-c-3@2x.png"
      />
      <div className="flex flex-row items-center justify-center">
        <div className="relative font-semibold">
          <p className="m-0 xl:text-13xl">{`A Fairytale Setting: Creating a Magical Wedding Stage `}</p>
        </div>
      </div>
    </div>



    {/* Section 2  */}
    <div className="flex flex-col items-start justify-start gap-5 text-3xl text-gray-200 font-poppins max-w-[600px]
    xxl:max-w-[500px]
    xl:max-w-[400px] lg:hidden
    ">
      <img
        className="w-[600px] relative h-[500px] object-cover
        xxl:w-[500px] xxl:h-[400px]
        xl:w-[400px] xl:h-[300px]
        "
        alt=""
        src="/3-top-c-2@2x.png"
      />
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative">{`This stunning wedding stage is a perfect example of how to transform a simple outdoor space into a magical and enchanting setting. `}</div>
      </div>
    </div>

    {/* Section 3 */}
    <img
      className="w-[350px] relative h-[650px] object-cover
        xxl:max-w-[300px]  xxl:h-[600px]
        xl:w-[250px] xl:h-[500px] lg:hidden
      
      "
      alt=""
      src="/3-top-c-1@2x.png"
    />


        {/* Tab Section  */}
    <div className='hidden flex-row items-start justify-center gap-5 w-[700px] lg:flex tab:hidden'>

    <div className=" flex flex-col items-start justify-start gap-5">
      <img
        className="w-full relative h-[370px] object-cover
        "
        alt=""
        src="/3-top-c-3@2x.png"
      />
      <div className="flex flex-row items-center justify-center">
        <div className="relative font-semibold">
          <p className="m-0 xl:text-13xl">{`A Fairytale Setting: Creating a Magical Wedding Stage `}</p>
        </div>
      </div>
    </div>
    <img
      className="w-full relative h-[650px] object-cover
     hidden lg:flex
      "
      alt=""
      src="/3-top-c-1@2x.png"
    />
    </div>

    <div className="hidden flex-col items-start justify-start gap-5 text-3xl text-gray-200 font-poppins w-[700px]  
     lg:flex px-5 tab:hidden
    ">
      <img
        className="w-[95%] relative h-[500px] object-cover 

        "
        alt=""
        src="/3-top-c-2@2x.png"
      />
      {/* Phone Text */}
          <div className=" flex-row items-center justify-center hidden tab:flex text-23xl text-gray-100 font-cormorant-garamond">
        <div className="relative font-semibold">
          <p className="m-0 xl:text-13xl">{`A Fairytale Setting: Creating a Magical Wedding Stage `}</p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative">{`This stunning wedding stage is a perfect example of how to transform a simple outdoor space into a magical and enchanting setting. `}</div>
      </div>
    </div>
  </div>

  {/* Phone Section  */}
  <div
    className={`self-stretch flex-row items-start justify-start gap-5 text-left text-23xl text-gray-100 font-cormorant-garamond hidden tab:flex w-full`}
  >
    

    <div className="flex flex-col items-start justify-start gap-5 text-3xl text-gray-200 font-poppins w-full 
    ">
      <img
        className="w-full relative object-contain

        "
        alt=""
        src="/3-top-c-2@2x.png"
      />
      {/* Phone Text */}
          <div className=" flex-row items-center justify-center hidden tab:flex text-23xl text-gray-100 font-cormorant-garamond">
        <div className="relative font-semibold">
          <p className="m-0 xl:text-13xl">{`A Fairytale Setting: Creating a Magical Wedding Stage `}</p>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center">
        <div className="flex-1 relative text-[17px] ">{`This stunning wedding stage is a perfect example of how to transform a simple outdoor space into a magical and enchanting setting. `}</div>
      </div>
    </div>
  </div>
  </>
  )
}

export default StoriesFrame1