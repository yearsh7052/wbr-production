import PropTypes from "prop-types";

const Desktop = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch [background:linear-gradient(180deg,_#d9d4e6,_#fff)] overflow-hidden flex flex-col items-center justify-center py-[50px] px-2.5 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-10">
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
        <div className="relative">
          <span>A Glimpse into Our Work</span>
          <span className="font-semibold">{` `}</span>
        </div>
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      </div>
      <div className="flex flex-col items-start justify-start gap-[100px] text-left text-81xl text-white">
        <div className="w-[1028.1px] relative h-[614.1px]">
          <div className="absolute top-[0px] left-[29.4px] [filter:blur(20px)] bg-mediumpurple-200 w-[1000px] h-[562.5px] [transform:_rotate(3deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[17.4px] left-[8.7px] w-[1009.7px] h-[579.9px] object-contain"
            alt=""
            src="/3-top-a--1@2x.png"
          />
          <div className="absolute top-[298.1px] left-[336.6px] leading-[75px]">
            STYLIST
          </div>
        </div>
        <div className="w-[1028.1px] relative h-[614.1px]">
          <div className="absolute top-[52.3px] left-[0px] [filter:blur(20px)] bg-mediumpurple-200 w-[1000px] h-[562.5px] [transform:_rotate(-3deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[16.4px] left-[8.7px] w-[1009.7px] h-[579.9px] object-contain"
            alt=""
            src="/3-top-a--11@2x.png"
          />
          <div className="absolute top-[calc(50%_-_37.05px)] left-[calc(50%_-_262.05px)] leading-[75px]">
            VISIONARY
          </div>
        </div>
      </div>
    </div>
  );
};

Desktop.propTypes = {
  className: PropTypes.string,
};

export default Desktop;
