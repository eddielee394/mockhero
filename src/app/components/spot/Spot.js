import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Card,
  makeStyles,
  Typography,
  Button
} from "@material-ui/core";
import { DirectionsWalk } from "@material-ui/icons";
import { RoundedButton } from "../ui/roundedButton/RoundedButton";
import { generateSpotDisplayRate } from "../../utils/utils";
import { SpotRating } from "./SpotRating";
import { getSpot, toggleSpotDetailsModal } from "./spotSlice";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    width: "100%",
    padding: theme.spacing(1)
  },
  spotItemAvatar: {
    height: "100%",
    width: "80px",
    marginRight: "10px"
  },
  spotTitle: {
    maxWidth: "95%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 1,
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  spotDetailsPriceSup: {
    top: ".3em",
    fontSize: "60%",
    lineHeight: 0,
    position: "relative"
  }
}));

const Spot = ({ spot }) => {
  const { showSpotDetailsModal } = useSelector(({ spot }) => spot);

  const dispatch = useDispatch();
  const classes = useStyles();

  function handleShowSpotItemDetails() {
    dispatch(toggleSpotDetailsModal());
  }

  return (
    <Card className={classes.card} onClick={handleShowSpotItemDetails}>
      <div className="flex flex-grow">
        <Avatar
          variant="rounded"
          src={spot.default_image_url}
          className={classes.spotItemAvatar}
        />
        <div className="flex-grow">
          <div className="flex justify-between">
            <div className="spotItemDetailsInfo">
              <Typography
                className={classes.spotTitle}
                variant="subtitle2"
                component="h2"
              >
                {spot.title}
              </Typography>
              <div className="spotItemReviews">
                {spot.rating_info.number_of_ratings > 0 && (
                  <SpotRating
                    starRating={spot.rating_info.star_rating}
                    numberOfRatings={spot.rating_info.number_of_ratings}
                  />
                )}
              </div>
              <div className="flex items-center">
                <DirectionsWalk color="primary" />
                <Typography variant="h6">
                  {spot.distanceInMiles.toFixed(1)} mi
                </Typography>
              </div>
            </div>
            <div className="spotDetailsPriceContainer">
              <Typography variant="h6">
                <sup className={classes.spotDetailsPriceSup}>
                  {spot.currency_symbol}
                </sup>
                {generateSpotDisplayRate(spot.hourly_rates.display_price)}
              </Typography>
              <Typography variant="caption">total</Typography>
            </div>
          </div>
          <div className="flex justify-end">
            <RoundedButton variant="text" size="medium" disableRipple>
              Details
            </RoundedButton>
            <RoundedButton
              size="medium"
              variant="contained"
              color="primary"
              disableElevation
            >
              Book Now
            </RoundedButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Spot;
