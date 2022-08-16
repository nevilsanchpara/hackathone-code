import {useState, useEffect} from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationMarker1 from "./LocationMarker1";
// import LocationInfoBox from "./LocationInfoBox";
import axios from "axios";
import "./MapContainer.css";
// import Filter from "../components/Filter";
// import {IoMdClose} from "react-icons/io";
// import Search from "./Search";

const Map = ({eventData, center, zoom}) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [isFilterOn, setIsFilterOn] = useState(false);
  const [query, setQuery] = useState();
  const [details, setDetails] = useState();
  const [isDropDownOn, setIsDropDownOn] = useState();
  const [address, setAddress] = useState();
  let [lat, setLat] = useState(23.473324);
  let [long, setLong] = useState(77.947998);
  const submitHandler = (lat, lon) => {
    console.log(lat, lon);
    setIsDropDownOn(false);
    setLat(lat);
    setLong(lon);
  };

  const changeFilter = () => {
    setIsFilterOn(false);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&apiKey=25c4584e1d9a4aa0be85fa89a58ac389`
      )
      .then(function (response) {
        // handle success
        console.warn(response);
        console.log(response.data.features[0].properties);
        setDetails(response.data.features[0].properties);
        // setDetails(response.data.features[0].properties.address_line1);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    return () => {
      setDetails();
      setLocationInfo();
    };
  }, [lat, long]);
  const changeHandler = (e) => {
    setIsDropDownOn(true);
    setQuery(e.target.value);
    var requestOptions = {
      method: "GET",
    };
    fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=25c4584e1d9a4aa0be85fa89a58ac389`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setAddress(result.features))
      .catch((error) => console.log("error", error));
  };
  const markers = eventData.map((ev, index) => {
    if (ev.is_working) {
      return (
        <LocationMarker1
          key={index}
          lat={ev.latitude}
          lng={ev.longitude}
          onClick={() => {
            setLocationInfo(ev);
          }}
        />
      );
    } else {
      return (
        <LocationMarker
          key={index}
          lat={ev.latitude}
          lng={ev.longitude}
          onClick={() => {
            setIsFilterOn(!isFilterOn);
            setLocationInfo(ev);
          }}
        />
      );
    }
  });

  return (
    <div className='map' style={{height: "100vh", width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys={{key: "AIzaSyAd24rdyYpxR1kBIrW9klvV0co0X4coXH4"}}
        defaultCenter={center}
        defaultZoom={zoom}>
        {markers}
      </GoogleMapReact>
      {/* {filterHandler} */}
      {/* {isFilterOn && <Filter changeFilter={changeFilter} details={details} />} */}
      {/* {true && <Search />} */}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 21.1702,
    lng: 72.8311,
  },
  zoom: 5,
};

export default Map;
