import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function Logout() {
  const history = useHistory();
  useEffect(() => {
    localStorage.clear();
    history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Loading...</div>;
}
