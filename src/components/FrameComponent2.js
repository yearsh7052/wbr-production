import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-5 text-left text-23xl text-gray-100 font-cormorant-garamond ${className}`}
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <img
          className="w-[350px] relative h-[370px] object-cover"
          alt=""
          src="/3-top-c-3@2x.png"
        />
        <div className="flex flex-row items-center justify-center">
          <div className="relative font-semibold">
            <p className="m-0">{`A Fairytale Setting: `}</p>
            <p className="m-0">{`Creating a Magical `}</p>
            <p className="m-0">Wedding Stage</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-5 text-3xl text-gray-200 font-poppins">
        <img
          className="w-[600px] relative h-[500px] object-cover"
          alt=""
          src="/3-top-c-2@2x.png"
        />
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative">{`This stunning wedding stage is a perfect example of how to transform a simple outdoor space into a magical and enchanting setting. `}</div>
        </div>
      </div>
      <img
        className="w-[350px] relative h-[650px] object-cover"
        alt=""
        src="/3-top-c-1@2x.png"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
