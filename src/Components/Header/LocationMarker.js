// import {Icon} from "@iconify/react";
// import locationIcon from "@iconify/icons-mdi/fire-alert";
// import {BiRupee} from "react-icons/bi";
//
const LocationMarker = ({lat, lng, onClick}) => {
  return (
    <div
      className='location-marker'
      style={{cursor: "pointer"}}
      onClick={onClick}>
      {/* <Icon icon={locationIcon} className='location-icon' /> */}
      {/* <img
        src={require("https://i.ibb.co/W6rvv7j/Untitled-design-4-1.png")}
        alt='hi'
      /> */}
      <img src='https://i.ibb.co/W6rvv7j/Untitled-design-4-1.png' alt='new' />
      {/* <Img  */}
    </div>
  );
};

export default LocationMarker;
