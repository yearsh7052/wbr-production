import PropTypes from "prop-types";

const Desktop3 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-lavender-100 overflow-hidden flex flex-col items-center justify-center pt-[50px] px-[100px] pb-[100px] box-border gap-10 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-10">
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
        <div className="relative">Client Speaks</div>
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      </div>
      <div className="self-stretch shadow-[0px_0px_30px_#94349d] bg-darkmagenta flex flex-col items-start justify-start py-[100px] px-[200px] relative gap-5 text-mid text-gray-300 font-optima-nova-lt-pro">
        <div className="self-stretch flex flex-col items-start justify-center gap-5 z-[0]">
          <div className="self-stretch relative leading-[25px]">
            “ Based on your blueprint, we'll assemble a dream team of talented
            professionals. From caterers and photographers to entertainers and
            artisans “
          </div>
          <div className="flex flex-col items-center justify-center py-0 px-[25px] text-left text-8xl text-gray-400 font-stay-classy-duo-serif">
            <div className="relative">by ritz</div>
          </div>
        </div>
        <div className="!m-[0] absolute top-[256px] left-[calc(50%_-_90px)] flex flex-row items-center justify-start gap-5 z-[1]">
          <div className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0" />
          <div className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0" />
          <div className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0" />
          <div className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0" />
          <div className="w-5 relative rounded-81xl bg-white h-5 overflow-hidden shrink-0" />
        </div>
      </div>
    </div>
  );
};

Desktop3.propTypes = {
  className: PropTypes.string,
};

export default Desktop3;
