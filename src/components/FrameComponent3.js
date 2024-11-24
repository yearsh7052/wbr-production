import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center gap-5 text-left text-3xl text-gray-200 font-poppins ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-between pt-[50px] px-0 pb-0">
        <div className="flex flex-row items-center justify-center">
          <div className="w-[350px] relative inline-block shrink-0">{`This serene outdoor wedding ceremony space is a perfect example of how to create a peaceful and intimate atmosphere. `}</div>
        </div>
        <img
          className="w-[350px] relative h-[400px] object-cover"
          alt=""
          src="/3-top-c-31@2x.png"
        />
      </div>
      <img
        className="w-[600px] relative h-[650px] object-cover"
        alt=""
        src="/3-top-c-21@2x.png"
      />
      <div className="flex flex-col items-start justify-start gap-5 text-23xl text-gray-100 font-cormorant-garamond">
        <img
          className="w-[350px] relative h-[400px] object-cover"
          alt=""
          src="/3-top-c-11@2x.png"
        />
        <div className="flex flex-row items-center justify-center">
          <div className="w-[350px] relative font-semibold inline-block shrink-0">
            <p className="m-0">{`A Sacred Space: `}</p>
            <p className="m-0">Creating a Tranquil Wedding Ceremony Setting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
