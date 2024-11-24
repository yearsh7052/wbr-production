import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-end justify-center gap-5 text-left text-23xl text-gray-100 font-cormorant-garamond ${className}`}
    >
      <img
        className="w-[350px] relative h-[650px] object-cover"
        alt=""
        src="/3-top-c-12@2x.png"
      />
      <div className="flex flex-col items-start justify-end gap-5">
        <div className="self-stretch relative font-semibold">
          Creating a Stunning Wedding Reception Table Setting
        </div>
        <img
          className="w-[600px] relative h-[550px] object-cover"
          alt=""
          src="/3-top-c-22@2x.png"
        />
      </div>
      <div className="flex flex-col items-start justify-start gap-5 text-3xl text-gray-200 font-poppins">
        <div className="self-stretch flex flex-row items-center justify-center">
          <div className="flex-1 relative">
            This beautifully decorated wedding reception table is a perfect
            example of how to create a stylish and welcoming atmosphere.
          </div>
        </div>
        <img
          className="w-[350px] relative h-[400px] object-cover"
          alt=""
          src="/3-top-c-32@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
