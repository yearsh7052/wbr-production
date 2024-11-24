import React, { useEffect, useRef, useState } from 'react'

function HeroSection() {

  const introVideoRef = useRef(null); // Reference for the introductory video
  const loopVideoRef = useRef(null); // Reference for the looping video
  const [isPlaying, setIsPlaying] = useState(false); // State to manage play status

  // Handle the end of the intro video
  const handleIntroEnd = () => {
    introVideoRef.current.style.transition = 'opacity 1s';
    introVideoRef.current.style.opacity = 0;
    // Hide the intro video and play the looping video
    introVideoRef.current.style.display = 'none';
    loopVideoRef.current.style.display = 'block';
    loopVideoRef.current.play().catch((error) => {
      console.error("Error attempting to play loop video", error);
    });
  };

  const startIntroVideo = () => {
    const introVideo = introVideoRef.current;
    if (introVideo) {
      introVideo.play().then(() => {
        setIsPlaying(true); // Set playing state to true
      }).catch((error) => {
        console.error("Error attempting to play intro video", error);
      });
    }
  };

  useEffect(() => {
    // Start the intro video on component mount
    startIntroVideo();
  }, []);
  return (
   
    <div
    className={`self-stretch bg-white w-full h-screen overflow-hidden  flex flex-col items-center justify-center  box-border text-left text-xl text-black font-cormorant-garamond tab:h-auto`}
  >   
      <video 
      ref={introVideoRef}
      className={` h-screen transition-transform duration-1000} tab:hidden `}
      autoPlay
      muted
      onEnded={handleIntroEnd}
      >
      <source src="/Text+Overlay.mp4" type="video/mp4" />
    </video>

      <video 
      style={{display: 'none'}}
      ref={loopVideoRef}
      className=" h-screen transition-opacity duration-1000 tab:hidden " 
      autoPlay
      muted
      loop
      // onEnded={handleIntroEnd}
      >
      <source src="/Overlay.mp4" type="video/mp4" />
    </video>

      <video 
      ref={loopVideoRef}
      className="  w-screen h-screen object-cover transition-opacity duration-1000 hidden tab:block " 
      autoPlay
      muted
      loop
      // onEnded={handleIntroEnd}
      >
      <source src="/Overlay.mp4" type="video/mp4" />
    </video>


    </div>
  )
}

export default HeroSection