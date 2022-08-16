// import {Icon} from "@iconify/react";
// import locationIcon from "@iconify/icons-mdi/fire-alert";
// import {BiRupee} from "react-icons/bi";

const LocationMarker = ({lat, lng, onClick}) => {
  return (
    <div
      className='location-marker'
      style={{cursor: "pointer"}}
      onClick={onClick}>
      {/* <BiRupee className='location-icon' /> */}
      <img src='https://i.ibb.co/HYpPwWx/Untitled-design-5-1.png' alt='new' />

      {/* <Img  */}
    </div>
  );
};

export default LocationMarker;
