import React, { useEffect, useState } from "react";
import API_KEY from "../../api-key.js";

import SearchForm from "../rover-searchform/rover-searchform.component.js";
import RoverImages from "../roverimage/roverimage.component.js";
import PageTitle from "../page-title/page-title.component.js";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import LinearProgress from "@material-ui/core/LinearProgress";

import { Pagination } from "@material-ui/lab";
import Divider from "@material-ui/core/Divider";

import { useStyles } from "./marsrover.styles";

const RoversPage = () => {
  const styles = useStyles();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  //-----------
  const itemsPerPage = 6;
  const [page, setPage] = React.useState(1);
  const [noOfPages, setNoOfPages] = React.useState(5
    // Math.ceil((data.length || 0) / itemsPerPage)
  );
  const handleChange = (event, value) => {
    setPage(value);
  };
  //------
  const getData = async (date, camera, rover) => {
    if (date === "" || camera === "" || rover === "") {
      alert("Please complete all fields");
      return;
    }

    console.log("Date  " + date);

    setData(null);
    setLoading(true);

    const result = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&camera=${camera}&page=1&api_key=${API_KEY.apiKey}`
  );

    const data = await result.json();

    if (data.error) {
      console.log(data.error);
      setLoading(false);

    } else if (data.photos < 1) {
      alert("No images on this camera, for this sol.");
      setLoading(false);
      return;

    } else {
      // const skip = (page - 1) * itemsPerPage;
      // const paginatedPhotos = data.photos.slice(skip, page * itemsPerPage);
      // setData(paginatedPhotos);
      setData(data.photos);
      setNoOfPages(Math.ceil((data.photos.length) / itemsPerPage))
      setLoading(false);
      console.log("LANDING DATE: " + data[0]);
    }
  };
  return (
    <div>
      <div className={styles.root}>
        <PageTitle
          title={"Mars Rovers"}
          subTitle={"Image data gathered by Curiosity, Opportunity and Spirit "}
        />
        <SearchForm getData={getData} />
      </div>

      <GridList cellHeight={"auto"}>
        {data ? (
            data
            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
            .map((item, i) => (
            <GridListTile s={12} key={i}>
              <RoverImages key={i} imageUrl={item.img_src} solDate={item.sol} />
            </GridListTile>
          ))
        ) : (
          <p></p>
        )}
      </GridList>
      <Divider />
      {data ? (
          <Pagination
        count={noOfPages}
        page={page}
        onChange={handleChange}
        defaultPage={1}
        color="primary"
        size="large"
        classes={{ ul: useStyles.pag }}
      />) : (<p></p>)}

      {isLoading ? <LinearProgress /> : <p></p>}
    </div>
  );
};

export default RoversPage;
