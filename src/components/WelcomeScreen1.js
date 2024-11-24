import PropTypes from "prop-types";

const WelcomeScreen1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-white overflow-hidden flex flex-col items-center justify-start p-[50px] gap-5 text-left text-8xl text-gray-600 font-optima-nova-lt-pro ${className}`}
    >
      <div className="w-[1340px] relative h-[800.2px] hidden" />
      <img
        className="w-[100px] relative h-[148.6px] object-cover"
        alt=""
        src="/final-logo-client-1@2x.png"
      />
      <div className="flex flex-col items-center justify-start gap-[30px]">
        <div className="flex flex-row items-start justify-center gap-5">
          <div className="relative">About Us</div>
          <div className="relative">Services</div>
          <div className="relative">Stories</div>
          <div className="relative">Client Speaks</div>
          <div className="relative">Portfolio</div>
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
        <div className="flex flex-row items-start justify-center gap-[50px] text-gray-700">
          <div className="relative">© 2024</div>
          <div className="relative">Weddings by Rishab</div>
          <div className="relative">All Right Reserved</div>
          <div className="relative">{`Terms & Condition`}</div>
          <div className="relative">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

WelcomeScreen1.propTypes = {
  className: PropTypes.string,
};

export default WelcomeScreen1;
