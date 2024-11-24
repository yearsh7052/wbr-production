import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ServicesComponent = ({
  className = "",
  image,
  privateParty,
  image1,
  birthdayParty,
  image2,
  wedding,
  propAlignItems,
  propJustifyContent,
  propMarginTop,
  propHeight,
  propHeight1,
  marginB
}) => {

  const [marginTop, setMarginTop] = useState(propMarginTop);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth >= 1280) {
  //       console.log('Margin changed')
  //       setMarginTop("0px"); // Set the new margin value here
  //     } else {
  //       setMarginTop(propMarginTop); // Reset to the original value
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Check on mount
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [window.innerWidth]);

  // console.log(marginTop)

  const frameDivStyle = useMemo(() => {
    return {
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      marginTop: propMarginTop,
    };
  }, [propAlignItems, propJustifyContent, propMarginTop]);

  const imageIconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const imageIcon1Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className={`flex flex-row items-start justify-start gap-10 text-left text-23xl text-darkslateblue-100 font-cormorant-garamond  ${className} 
      xxl:gap-5 xl:flex-col tab:w-full tab:mt-0 tab:gap-5 tab:${marginB} `}
      style={frameDivStyle}
    >

      {/* Img 1 */}
      <div className="shadow-[0px_0px_20px_#d9d4e6] flex flex-col items-start justify-end p-5 gap-5
      [background:linear-gradient(180deg,_#d9d4e6,_rgba(217,_212,_230,_0.4))] 
      box-border tab:w-full tab:p-2  overflow-hidden group">
        <img
          className="w-[350px] relative h-[470px] object-cover tab:w-full tab:h-[400px] overflow-hidden  phn:h-[350px] transform transition-all duration-500 hover:scale-125 cursor-pointer"
          alt=""
          src={image}
          style={imageIconStyle}
        />
        <div className="relative font-semibold group-hover:text-white transform transition-all duration-1000 group-hover:bg-darkslateblue-100 group-hover:px-3 ">{privateParty}</div>
      </div>

      {/* Img 2 */}
      <div className="shadow-[0px_0px_20px_#d9d4e6] [background:linear-gradient(180deg,_#d9d4e6,_rgba(217,_212,_230,_0.4))] flex flex-col items-start justify-end p-5 gap-5
       box-border tab:w-full tab:p-2 overflow-hidden group
      ">
        <img
          className="w-[350px] relative h-[350px] object-cover lg:w-[320px]  tab:w-full tab:h-[400px]  phn:h-[350px] transform transition-all duration-500 hover:scale-125 cursor-pointer"
          alt=""
          src={image1}
        />
        <b className="relative group-hover:text-white transform transition-all duration-1000 group-hover:bg-darkslateblue-100 group-hover:px-3">{birthdayParty}</b>
      </div>

      {/* Img 3 */}
      <div className="shadow-[0px_0px_20px_#d9d4e6] [background:linear-gradient(180deg,_#d9d4e6,_rgba(217,_212,_230,_0.4))] flex flex-col items-start justify-end p-5 gap-5
      box-border tab:w-full tab:p-2 overflow-hidden group
      ">
        <img
          className="w-[350px] relative h-[300px] object-cover lg:w-[320px] tab:w-full tab:h-[400px] phn:h-[350px] transform transition-all duration-500 hover:scale-125 cursor-pointer"
          alt=""
          src={image2}
          style={imageIcon1Style}
        />
        <div className="relative font-semibold group-hover:text-white transform transition-all duration-1000  group-hover:bg-darkslateblue-100 group-hover:px-3">{wedding}</div>
      </div>
    </div>
  );
};

ServicesComponent.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  privateParty: PropTypes.string,
  image1: PropTypes.string,
  birthdayParty: PropTypes.string,
  image2: PropTypes.string,
  wedding: PropTypes.string,

  /** Style props */
  propAlignItems: PropTypes.any,
  propJustifyContent: PropTypes.any,
  propMarginTop: PropTypes.any,
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default ServicesComponent;
