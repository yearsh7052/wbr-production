import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {

  const navigate = useNavigate()

  const [phnScreen, setPhoneScreen]=useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setPhoneScreen(true)
      }else {
        setPhoneScreen(false)
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='bg-black w-full flex flex-col items-center justify-center font-cormorant-garamond '>
    {/* Book your session section  */}
    <div className="w-full overflow-hidden flex flex-col items-center justify-center p-[100px] box-border bg-[url('/public/desktop--8@3x.png')] bg-cover bg-no-repeat bg-[top] text-white   tab:p-[50px] phn:p-[20px] ">
    <div className="flex flex-col items-center justify-start gap-10 tab:gap-5">
    <div className="flex flex-row items-center justify-center">
    <i className="relative tracking-[-0.03em] text-23xl lg:text-8xl phn:text-xl">Get ready to</i>
    </div>
    <div className="flex flex-row items-center justify-center text-[154px] xl:text-[120px] lg:text-53xl phn:text-23xl">
    <div className="relative tracking-[-0.04em] font-medium ">
    Book Your Session
    </div>
    </div>
    <div className="flex flex-row items-center justify-center gap-10 text-13xl tab:gap-5   lg:text-8xl tab:text-xl sphn:text-[17px] sphn:gap-2">

    <a className="no-underline  text-white"
    href='https://mail.google.com/mail/?view=cm&fs=1&to=weddingsbyrishabh@gmail.com' target='_blank'>
    <div className="relative tracking-[-0.04em] font-medium cursor-pointer">
    weddingsbyrishabh@gmail.com
    </div>
    </a>

    <div className="w-0.5 relative rounded-81xl bg-white h-[50px] overflow-hidden shrink-0" />
    <a className="no-underline  text-white" href={!phnScreen ? 'https://web.whatsapp.com/send?phone=9315627762' : "https://wa.me/9315627762"} target='_blank'>
    <div className="relative tracking-[-0.04em] font-medium cursor-pointer">
    Chat on WhatsApp
    </div>
    </a>
    </div>
    </div>
    </div>

    {/* Logo and other section */}
    <div className={` self-stretch bg-[#F6F5F4] overflow-hidden flex flex-col items-center justify-start p-[50px] gap-5 text-left text-8xl text-gray-600 font-cormorant-garamond
     phn:p-[20px] tab:text-xl phn:text-mid `}
    >
      <div className="w-auto relative h-[800.2px] hidden" />


      <img
        className="w-auto relative tab:h-40 phn:h-28 object-cover"
        alt=""
        src="/complete-logo.svg"
      />

     
      <div className="flex flex-col items-center justify-start gap-[30px] 
      tab:flex-row tab:items-start tab:gap-5  phn:gap-10">
        <div className="flex flex-row items-start justify-center gap-5 tab:flex-col">
          <div onClick={()=>navigate('/aboutus')} className="relative cursor-pointer">About Us</div>
          <div onClick={()=>navigate('/services')} className="relative cursor-pointer">Services</div>
          <div onClick={()=>navigate('/stories')} className="relative cursor-pointer">Stories</div>
          <div onClick={()=>navigate('/clientspeaks')} className="relative cursor-pointer">Client Speaks</div>
          <div onClick={()=>navigate('/portfolio')} className="relative cursor-pointer">Portfolio</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2.5 tab:hidden">

        <a className='h-[24px] cursor-pointer' href='https://www.instagram.com/weddings.by.rishabh/' target='_blank'>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/letsiconsinsta.svg"
      />
      </a>

      <a className='h-[24px] cursor-pointer' href='https://www.facebook.com/weddingsbyrishabh' target='_blank'>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/antdesignfacebookoutlined.svg"
      />
      </a>

      <a className='h-[24px] cursor-pointer' href='https://www.youtube.com/@weddingsbyrishabh' target='_blank'>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/youtube-icon.svg"
      />
      </a>

      <a className='h-[24px] cursor-pointer' href='https://in.pinterest.com/weddingsbyrishabh/' target='_blank'>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/pinterest-icon.svg"
      />
      </a>


        </div>
        <div className="flex flex-row items-start justify-center gap-[50px] text-gray-700 tab:flex-col tab:gap-5">
          <div className="relative">© 2024</div>
          <div className="relative">Weddings by Rishabh</div>
          <div className="relative">All Right Reserved</div>
          <div  className="relative cursor-pointer">{`Terms & Condition`}</div>
          <div className="relative cursor-pointer">Privacy Policy</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
