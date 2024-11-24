import { useEffect } from "react";
import LandingPage1 from "../components/LandingPage1";
import SecondPageFixed from "../components/SecondPageFixed";
import WelcomeScreen from "../components/WelcomeScreen";
import Desktop from "../components/Desktop";
import Desktop1 from "../components/Desktop1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import Desktop2 from "../components/Desktop2";
import Desktop3 from "../components/Desktop3";
import Desktop4 from "../components/Desktop4";

const LandingPage = () => {
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
    <div className="w-full relative flex flex-col items-start justify-start text-center text-53xl text-darkslateblue-100 font-cormorant-garamond">
      {/* <LandingPage1 /> */}
      {/* <SecondPageFixed /> */}
      {/* <WelcomeScreen /> */}
      
      {/* Our Work */}
      {/* <Desktop /> */}
      
      {/* Instafeed */}
      {/* <Desktop1 /> */}
    

      {/* Services */}
      {/* <Desktop2 /> */}


      {/* Client Speaks */}
      <Desktop3 />


      {/* Featured on  */}
      <Desktop4 />



      {/* Book your sessioin */}
      {/* <div className="w-[1440px] overflow-hidden flex flex-col items-center justify-center p-[100px] box-border bg-[url('/public/desktop--8@3x.png')] bg-cover bg-no-repeat bg-[top] text-white">
        <div className="flex flex-col items-center justify-start gap-10">
          <div className="flex flex-row items-center justify-center">
            <i className="relative tracking-[-0.03em]">get ready to</i>
          </div>
          <div className="flex flex-row items-center justify-center text-[154px]">
            <div className="relative tracking-[-0.04em] font-medium">
              Book Your Session
            </div>
          </div>
          <div className="flex flex-row items-start justify-center gap-10 text-13xl">
            <div className="relative tracking-[-0.04em] font-medium">
              xyzxyz@gmail.com
            </div>
            <div className="w-0.5 relative rounded-81xl bg-white h-[50px] overflow-hidden shrink-0" />
            <div className="relative tracking-[-0.04em] font-medium">
              Chat on WhatsApp
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      {/* <WelcomeScreen1 /> */}

      {/* Animation */}
      <div className="w-full flex flex-col items-start justify-start">
        <div className="w-full bg-white overflow-hidden flex flex-row items-center justify-center flex-wrap content-center p-[50px] box-border gap-[100px]">

          <div
            className="h-[250px] w-[250px] relative bg-black overflow-hidden shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0]"
            data-animate-on-scroll
          />
          <div
            className="h-[250px] w-[250px] relative bg-black overflow-hidden shrink-0 [&.animate]:animate-[1s_ease-in-out_0s_1_normal_forwards_scale-up] opacity-[1]"
            data-animate-on-scroll
          />
          <div
            className="h-[250px] w-[250px] relative bg-black overflow-hidden shrink-0 [&.animate]:animate-[1s_ease-in-out_0s_1_normal_none_slit-in-vertical] opacity-[1]"
            data-animate-on-scroll
          />
          <div
            className="h-[250px] w-[250px] relative bg-black overflow-hidden shrink-0 [&.animate]:animate-[1s_ease_0s_infinite_normal_forwards_custom-animation] opacity-[0]"
            data-animate-on-scroll
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
