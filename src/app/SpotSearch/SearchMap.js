import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import GoogleMapReact from "google-map-react";

const useStyles = makeStyles(theme => ({
  mapWrapper: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100vh - 64px)` //todo fix offset for responsive support
  },
  mapCanvas: {
    flexGrow: 1
  }
}));

const AnyComponent = ({ text }) => {
  return (
    <div
      style={{
        color: "white",
        background: "grey",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)"
      }}
    >
      {text}
    </div>
  );
};

const SearchMap = props => {
  const classes = useStyles();
  function handleApiLoaded() {
    console.log("api loaded");
  }
  return (
    <div className={classes.mapWrapper}>
      <div className={classes.mapCanvas}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAO0jo_a46lUPxUkRlqbSf4ACib0MTZ63I" }}
          defaultZoom={15}
          defaultCenter={{ lat: 41.8757, lng: -87.6243 }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyComponent
            lat={59.955413}
            lng={30.337844}
            text={"A"} /* Kreyser Avrora */
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default SearchMap;
