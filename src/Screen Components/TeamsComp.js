import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const TeamsComp = ({
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
  marginB, 
  employeeName
}) => {

  const [marginTop, setMarginTop] = useState(propMarginTop);



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
      className={`flex flex-row items-start justify-start  text-left  text-darkslateblue-100 font-cormorant-garamond  ${className} 
        `}
    //   style={frameDivStyle}
    >

      {/* Img 1 */}
      <div className=" flex flex-col items-start justify-end p-1 gap-5
      [background:linear-gradient(180deg,_#d9d4e6,_rgba(217,_212,_230,_0.4))] 
      box-border tab:w-full tab:p-2  overflow-hidden group">
        <img
          className="w-[250px] h-[300px] relative  object-contain overflow-hidden  lg:w-[200px] lg:h-[250px] phn:w-full
          
          transform transition-all duration-500 hover:scale-125 cursor-pointer"
          alt=""
          src={image}
        //   style={imageIconStyle}
        />
        <div className="relative text-8xl font-semibold group-hover:text-white transform transition-all duration-1000 group-hover:bg-darkslateblue-100 group-hover:px-3
         max-w-[200px] ">{employeeName}</div>
      </div>
    </div>
  );
};

TeamsComp.propTypes = {
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

export default TeamsComp;
