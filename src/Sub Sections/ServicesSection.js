import React, { useEffect, useState } from 'react'
import ServicesComponent from '../Screen Components/ServicesComponent'

function ServicesSection() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1280);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div
    className={`w-full 
      [background:linear-gradient(180deg,_#fff,_#d9d4e6)].
       overflow-hidden flex flex-col items-center justify-center py-[50px] px-2.5 box-border gap-10 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond 
      tab:bg-white  tab:py-5 xl:text-33xl lg:text-23xl  tab:gap-5 phn:gap-1 phn:px-2
      `}
  >
    <div className="flex flex-row items-center justify-center gap-10">
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      <div className="relative ">Services</div>
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
    </div>
    <div className="w-full flex flex-col items-center justify-center text-left text-23xl 
    xl:flex-row xl:gap-5 xl:mt-[100px] tab:flex-col  ">
      <ServicesComponent
        image="/image3@2x.png"
        privateParty={"Private Party"}
        image1="/image4@2x.png"
        birthdayParty="Birthday Party"
        image2="/image5@2x.png"
        wedding="Wedding"
        propMarginTop={isSmallScreen ? "-100px" : undefined}
        marginB={'mb-[100px]'}
      />
      <ServicesComponent
        image="/image6@2x.png"
        privateParty="Mehndi Ceremony"
        image1="/image7@2x.png"
        birthdayParty="Haldi Ceremony"
        image2="/image8@2x.png"
        wedding="Reception"
        propAlignItems="flex-end"
        propJustifyContent="center"
        propMarginTop="-100px"
        propHeight="300px"
        propHeight1="466.7px"
      />
    </div>
  </div>
  )
}

export default ServicesSection