import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GoogleMapReact from "google-map-react";
import { APP_CONFIG } from "../../../config/appConfig";

const useStyles = makeStyles(theme => ({
  mapWrapper: {
    display: "flex",
    flexDirection: "column",
    height: `calc(100vh - 64px)` //todo fix offset for dynamic header height support
  }
}));

const SearchMap = props => {
  const classes = useStyles();

  function handleApiLoaded() {
    console.log("Gmaps api loaded");
  }

  return (
    <div className={classes.mapWrapper}>
      <div className="flex-grow">
        <GoogleMapReact
          bootstrapURLKeys={{ key: APP_CONFIG.googleMapsApiKey }}
          defaultZoom={15}
          defaultCenter={{ lat: 41.8757, lng: -87.6243 }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        />
      </div>
    </div>
  );
};

export default SearchMap;
