import React, { useEffect, useState } from 'react'
import ServicesComponent from '../Screen Components/ServicesComponent'
import TeamsComp from '../Screen Components/TeamsComp';

function Teams() {

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
       overflow-hidden flex flex-col items-center justify-center pb-10 px-2.5 box-border gap-5 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond 
      tab:bg-white  py-0 xl:text-33xl xl:pb-0 lg:text-23xl  phn:gap-1 phn:px-2
      `}
  >
    <div className="flex flex-row items-center justify-center gap-10">
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      <div className="relative ">Our Team</div>
      <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
    </div>
    <div className="flex-1 relative font-poppins text-xl tab:text-[16px] px-32 lg:px-20 tab:px-5 phn:px-0">{`Our team is a diverse group of passionate individuals dedicated to delivering innovative solutions. We bring together expertise across various fields, ensuring a collaborative approach to every project.  `}</div>
    <div className="w-full flex flex-row items-center justify-center text-left 
     xl:gap-5 gap-10 tab:gap-2 tab:flex-wrap phn:gap-5">
      {/* <ServicesComponent
        image="/image3@2x.png"
        privateParty={"Private Party"}
        image1="/image4@2x.png"
        birthdayParty="Birthday Party"
        image2="/image5@2x.png"
        wedding="Wedding"
        propMarginTop={isSmallScreen ? "-100px" : undefined}
        marginB={'mb-[100px]'}
      /> */}
      <TeamsComp
        image="/employee1.jpg"
        employeeName="Mr/Mrs ....."  
      />
      <TeamsComp
        image="/employee2.jpg"
        employeeName="Mr/Mrs ....."  
      />
      <TeamsComp
        image="/employee3.jpg"
        employeeName="Mr/Mrs ....."  
      />
    </div>
  </div>
  )
}

export default Teams