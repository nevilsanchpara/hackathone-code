import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {useEffect, useState} from "react";
import axios from "axios";

const History = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let type = localStorage.getItem("type");
    if (type === "supervisor") {
      let taluka = JSON.parse(localStorage.getItem("user")).taluka;
      console.log("taluka ", taluka);
      axios
        .get(
          `https://heroku-backend-hackathone.herokuapp.com/api/history/getHistory?taluka=${taluka}`
        )
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((e) => console.log(e));
    } else {
      let district = JSON.parse(localStorage.getItem("user")).district;
      console.log("district ", district);

      axios
        .get(
          `https://heroku-backend-hackathone.herokuapp.com/api/history/getHistory?district=${district}`
        )
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  if (!data) {
    return <h3>Loading...</h3>;
  }
  return (
    <TableContainer>
      {data?.length === 0 ? (
        <div className='text-center'>
          <h3 className='text-center'>No data found!!</h3>
        </div>
      ) : (
        <Table sx={{minWidth: 650}} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>History Id</TableCell>
              <TableCell>StreetLight Id</TableCell>
              <TableCell>Worker ID</TableCell>
              <TableCell>Worker Name</TableCell>
              <TableCell>Issue</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Pincode</TableCell>
              <TableCell>Village</TableCell>
              <TableCell>Taluka</TableCell>
              <TableCell>District</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, i) => (
              <TableRow
                key={i}
                sx={{"&:last-child td, &:last-child th": {border: 0}}}>
                <TableCell align='right'>{i + 1}</TableCell>
                <TableCell component='th' scope='row'>
                  {row.id}
                </TableCell>
                <TableCell align='right'>{row.streetLightId}</TableCell>
                <TableCell align='right'>{row.workerId}</TableCell>
                <TableCell align='right'>{row.repairedBy}</TableCell>
                <TableCell align='right'>{row.issue}</TableCell>
                <TableCell align='right'>{row.cost}</TableCell>
                <TableCell align='right'>{row.pincode}</TableCell>
                <TableCell align='right'>{row.village}</TableCell>
                <TableCell align='right'>{row.taluka}</TableCell>
                <TableCell align='right'>{row.district}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default History;
