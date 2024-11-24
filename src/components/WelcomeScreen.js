import PropTypes from "prop-types";

const WelcomeScreen = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(180deg,_#fff,_#d9d4e6)] overflow-hidden flex flex-col items-center justify-center py-5 px-[30px] gap-10 text-center text-53xl text-darkslategray font-cormorant-garamond ${className}`}
    >
      <div className="w-[1340px] relative h-[800.2px] hidden" />
      <div className="self-stretch flex flex-row items-center justify-start gap-5 text-sm">
        <div className="relative font-semibold">Weddings by Rishabh</div>
        <div className="flex-1 relative bg-lavender-100 h-0.5 overflow-hidden" />
        <div className="relative font-semibold">Established Since</div>
        <div className="flex-1 relative bg-lavender-100 h-0.5 overflow-hidden" />
        <div className="relative font-semibold">2000</div>
      </div>
      <div className="relative font-semibold text-lavender-100">{`Beyond Planning `}</div>
      <div className="flex flex-row items-start justify-start gap-10">
        <div className="bg-darkslateblue-200 overflow-hidden flex flex-row items-center justify-start pt-2.5 px-2.5 pb-[30px]">
          <img
            className="w-[224.4px] relative h-[256.4px] object-cover"
            alt=""
            src="/image-97@2x.png"
          />
        </div>
        <div className="bg-darkslateblue-200 overflow-hidden flex flex-row items-center justify-start pt-2.5 px-2.5 pb-[30px]">
          <img
            className="w-[224.4px] relative h-[256.4px] object-cover"
            alt=""
            src="/image2@2x.png"
          />
        </div>
      </div>
      <div className="relative font-semibold text-darkslateblue-100">
        We create symphony
      </div>
    </div>
  );
};

WelcomeScreen.propTypes = {
  className: PropTypes.string,
};

export default WelcomeScreen;
