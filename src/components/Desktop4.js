import FrameComponent1 from "../Screen Components/FeaturedOnComponent";
import PropTypes from "prop-types";

const Desktop4 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white overflow-hidden flex flex-col items-center justify-center py-[50px] px-[100px] box-border gap-10 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-10">
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
        <div className="relative">Featured On</div>
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-10 text-left text-mid text-gray-500 font-optima-nova-lt-pro">
        <FrameComponent1 prop="4.0 " image61="/image-61@2x.png" />
        <FrameComponent1
          prop="4.5 "
          image61="/image-62@2x.png"
          propWidth="235px"
          propHeight="44px"
        />
        <div className="flex-1 shadow-[0px_0px_20px_rgba(217,_212,_230,_0.25)] bg-lavender-200 h-[250px] flex flex-col items-start justify-start p-[50px] box-border gap-5">
          <div className="self-stretch flex flex-col items-start justify-center">
            <div className="flex flex-row items-start justify-start gap-2.5">
              <div className="relative leading-[25px]">3</div>
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
                  src="/solarstarbold1.svg"
                />
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/solarstarbold1.svg"
                />
              </div>
            </div>
          </div>
          <div className="relative text-8xl font-stay-classy-duo-serif text-gray-600">
            good
          </div>
          <img
            className="w-[228px] relative h-[43px] object-cover"
            alt=""
            src="/image-63@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Desktop4.propTypes = {
  className: PropTypes.string,
};

export default Desktop4;
