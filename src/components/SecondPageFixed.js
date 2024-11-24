import PropTypes from "prop-types";

const SecondPageFixed = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] overflow-hidden flex flex-col items-start justify-start ${className}`}
    >
      <img
        className="w-[1440px] relative h-[739.1px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="w-[1440px] [background:linear-gradient(180deg,_rgba(137,_89,_174,_0.4),_rgba(137,_89,_174,_0.02)_50%,_rgba(137,_89,_174,_0.4))] overflow-hidden flex flex-col items-center justify-center py-11 px-0 box-border">
        <div className="flex flex-row items-center justify-start">
          <div className="w-[400px] border-white border-[10px] border-solid box-border h-[500px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[25px]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image1@2x.png"
            />
          </div>
          <div className="w-[650px] border-white border-[9.2px] border-solid box-border h-[650px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[25px] ml-[-100px]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/2-fa-c-1@2x.png"
            />
          </div>
          <div className="w-[400px] border-white border-[10px] border-solid box-border h-[500px] overflow-hidden shrink-0 flex flex-row items-center justify-start p-[25px] ml-[-100px]">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/2-fa-c-11@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SecondPageFixed.propTypes = {
  className: PropTypes.string,
};

export default SecondPageFixed;
