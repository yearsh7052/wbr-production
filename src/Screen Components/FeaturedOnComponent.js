import { useMemo } from "react";
import PropTypes from "prop-types";

const FeaturedOnComponent = ({
  className = "",
  prop,
  image61,
  propWidth,
  propHeight,
}) => {
  const image61IconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div
      className={`flex-1 shadow-[0px_0px_20px_rgba(217,_212,_230,_0.25)] h-[250px] flex flex-col items-start justify-start p-[50px] box-border text-left text-mid text-gray-500 font-optima-nova-lt-pro ${className} w-[350px] min-w-[300px] bg-lavender-100  tab:w-full sphn:p-10 sphn:max-w-[250px]  `}
    >
      <div className="self-stretch flex flex-col items-start justify-center gap-5">
        <div className="flex flex-row items-start justify-start gap-2.5">
          <div className="relative leading-[25px]">{prop}</div>
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/solarstarbold.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/solarstarbold.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/solarstarbold.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/solarstarbold.svg"
            />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/solarstarbold1.svg"
            />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center text-8xl text-gray-600 font-stay-classy-duo-serif">
          <div className="relative">Very good</div>
        </div>
        <img
          className="w-[95px] relative h-10 object-cover"
          alt=""
          src={image61}
          style={image61IconStyle}
        />
      </div>
    </div>
  );
};

FeaturedOnComponent.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  image61: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default FeaturedOnComponent;
