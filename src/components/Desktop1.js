import PropTypes from "prop-types";

const Desktop1 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] [background:linear-gradient(180deg,_#fff,_#d9d4e6)] overflow-hidden flex flex-col items-center justify-center py-[50px] px-2.5 box-border gap-10 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-10">
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
        <div className="relative">Instagram Feed</div>
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      </div>
      <div className="w-[919.8px] flex flex-row items-start justify-start flex-wrap content-start gap-[50px]">
        <div className="h-[273.3px] w-[273.3px] relative">
          <div className="absolute top-[13.6px] left-[0px] border-white border-[5px] border-solid box-border w-[260px] h-[260px] overflow-hidden [transform:_rotate(-3deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[calc(50%_-_129.65px)] left-[calc(50%_-_129.55px)] w-[258.6px] h-[258.6px] object-contain"
            alt=""
            src="/446545536-3733818463572258-8220911656191259836-n-1@2x.png"
          />
        </div>
        <div className="w-[273.3px] relative h-[273.3px]">
          <div className="absolute top-[13.6px] left-[0px] border-white border-[5px] border-solid box-border w-[260px] h-[260px] overflow-hidden [transform:_rotate(-3deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[calc(50%_-_129.65px)] left-[calc(50%_-_129.55px)] w-[258.6px] h-[258.6px] object-contain"
            alt=""
            src="/446545536-3733818463572258-8220911656191259836-n-11@2x.png"
          />
        </div>
        <div className="w-[273.3px] relative h-[273.3px]">
          <div className="absolute top-[13.6px] left-[0px] border-white border-[5px] border-solid box-border w-[260px] h-[260px] overflow-hidden [transform:_rotate(-3deg)] [transform-origin:0_0]" />
          <img
            className="absolute top-[calc(50%_-_129.65px)] left-[calc(50%_-_129.55px)] w-[258.6px] h-[258.6px] object-contain"
            alt=""
            src="/446545536-3733818463572258-8220911656191259836-n-12@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

Desktop1.propTypes = {
  className: PropTypes.string,
};

export default Desktop1;
