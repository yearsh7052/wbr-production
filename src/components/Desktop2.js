import FrameComponent from "../Screen Components/ServicesComponent";
import PropTypes from "prop-types";

const Desktop2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] [background:linear-gradient(180deg,_#fff,_#d9d4e6)] overflow-hidden flex flex-col items-center justify-center py-[50px] px-2.5 box-border gap-10 text-center text-53xl text-darkslateblue-100 font-cormorant-garamond ${className}`}
    >
      <div className="flex flex-row items-center justify-center gap-10">
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
        <div className="relative">Services</div>
        <div className="w-2.5 relative rounded-981xl bg-darkslateblue-100 h-2.5" />
      </div>
      <div className="flex flex-col items-start justify-start text-left text-23xl">
        <FrameComponent
          image="/image3@2x.png"
          privateParty="Private Party"
          image1="/image4@2x.png"
          birthdayParty="Birthday Party"
          image2="/image5@2x.png"
          wedding="Wedding"
        />
        <FrameComponent
          image="/image6@2x.png"
          privateParty="Mehndi Ceremony"
          image1="/image7@2x.png"
          birthdayParty="Haldi Ceremony"
          image2="/image8@2x.png"
          wedding="Reception"
          propAlignItems="flex-end"
          propJustifyContent="center"
          propMarginTop="-100px"
          propHeight="300px"
          propHeight1="466.7px"
        />
      </div>
    </div>
  );
};

Desktop2.propTypes = {
  className: PropTypes.string,
};

export default Desktop2;
