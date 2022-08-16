import {useState, useEffect} from "react";
// import Loader from "./Loader";
import Map from "./Map";
// import io from "socket.io-client";

function MapContainer() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const socket = io.connect("http://localhost:8080");
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://heroku-backend-hackathone.herokuapp.com/api/position/positions"
      );
      const {data} = await res.json();

      setEventData(data);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  // useEffect(() => {
  //   //   console.log("hiii");
  //   socket.emit("data", "hello");
  //   socket.on("get_data", (d) => {
  //     // myFunc(d);
  //     console.log(d);
  //     setEventData(d);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <div>
      {/* <Header /> */}
      {!loading ? <Map eventData={eventData} /> : <h4>Loading...</h4>}
    </div>
  );
}

export default MapContainer;
