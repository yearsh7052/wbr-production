import PropTypes from "prop-types";

const LandingPage1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-lavender-100 h-[750px] overflow-hidden shrink-0 flex flex-col items-center justify-start p-5 box-border text-left text-xl text-black font-cormorant-garamond ${className}`}
    >
      <div className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-between py-[15px] px-[25px]">
        <img
          className="w-10 relative h-[60.6px] object-cover"
          alt=""
          src="/final-logo-client-2@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-10">
          <div className="relative font-semibold text-mediumpurple-100">
            HOME
          </div>
          <div className="relative">PORTFOLIO</div>
          <div className="relative">CLIENT SPEAKS</div>
          <div className="relative">SERVICES</div>
          <div className="relative">STORIES</div>
          <div className="relative">ABOUT US</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-2.5">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/magex.svg"
          />
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/letsiconsinsta.svg"
          />
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/antdesignfacebookoutlined.svg"
          />
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/icbaselinewhatsapp.svg"
          />
        </div>
      </div>
    </div>
  );
};

LandingPage1.propTypes = {
  className: PropTypes.string,
};

export default LandingPage1;
