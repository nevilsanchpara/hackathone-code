import {Icon} from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import {BiRupee} from "react-icons/bi";

const LocationMarker = ({lat, lng, onClick}) => {
  return (
    <div className='location-marker' onClick={onClick}>
      {/* <BiRupee className='location-icon' /> */}
      <img
        src='https://developers.google.com/static/maps/documentation/javascript/images/default-marker.png'
        alt='new'
      />

      {/* <Img  */}
    </div>
  );
};

export default LocationMarker;
