import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { Divider, Drawer, makeStyles, Typography } from "@material-ui/core";
import { DirectionsWalk, ExpandMore } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { RoundedButton } from "../ui/roundedButton/RoundedButton";
import { SectionTitle } from "../ui/sectionTitle/SectionTitle";
import {
  formatDate,
  generateSpotDisplayRate,
  parseImageUrlTemplate
} from "../../utils/utils";
import { getSpot, toggleSpotDetailsModal } from "../spot/spotSlice";
import { SpotRating } from "../spot/SpotRating";
import { SpotDetailDrawerFooter } from "./SpotDetailDrawerFooter";

const drawerWidth = 400;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    position: "absolute",
    overflowX: "hidden"
  },
  drawerContainer: {
    overflow: "auto",
    padding: 10
  },
  modal: {
    position: "absolute !important"
  },
  backdropRoot: {
    position: "absolute"
  },
  spotDetailsSection: {
    padding: theme.spacing(2)
  },
  iconPlaceholder: {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.grey[600]
  },
  spotDetailsPriceSup: {
    top: ".3em",
    fontSize: "60%",
    lineHeight: 0,
    position: "relative"
  },
  amenityIcon: {
    width: "20px",
    height: "20px"
  },
  footerContainer: {
    backgroundColor: theme.palette.grey[200]
  }
}));

const routeParams = { spotId: 6497 };

const SpotDetailDrawer = ({ containerRef }) => {
  const { showSpotDetailsModal, selected } = useSelector(({ spot }) => spot);
  const spot = selected;

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpot(routeParams));
  }, []);

  function handleToggleModal() {
    dispatch(toggleSpotDetailsModal());
  }

  const formattedReservationDate =
    spot &&
    `${formatDate(spot.hourly_rates.starts, "PP", true)} ${formatDate(
      spot.hourly_rates.starts,
      "p"
    )} - ${formatDate(spot.hourly_rates.ends, "p")}`;

  return (
    <div className="flex w-full">
      <Drawer
        open={showSpotDetailsModal}
        onClose={handleToggleModal}
        ModalProps={{
          container: containerRef.current
        }}
        BackdropProps={{ classes: { root: classes.backdropRoot } }}
        classes={{
          modal: classes.modal,
          paper: classes.drawerPaper
        }}
        SlideProps={{
          onExiting: node => {
            node.style.webkitTransform = "scaleX(0)";
            node.style.transform = "scaleX(0)";
            node.style.transformOrigin = "top left ";
          }
        }}
        className={classes.drawerContainer}
      >
        {spot && (
          <div className="flex flex-col">
            <div className="spotDetailsSlideshow">
              <div>
                <img
                  src={parseImageUrlTemplate(
                    spot.facility.images[0].url_template,
                    500,
                    200,
                    72
                  )}
                />
              </div>
            </div>
            <div className={classes.spotDetailsSection}>
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
            <Divider />
            <div className={classes.spotDetailsSection}>
              <div className="spotDetailsSummary flex justify-between mb-5">
                <div className="spotDetailsDrawerReservationPriceContainer">
                  <SectionTitle variant="h6">Parking Reservation</SectionTitle>
                  <Typography>{formattedReservationDate}</Typography>
                </div>
                <div className="spotDetailsDrawerPriceContainer">
                  <Typography variant="h6">
                    <sup className={classes.spotDetailsPriceSup}>
                      {spot.currency_symbol}
                    </sup>
                    {generateSpotDisplayRate(spot.selectedRate.display_price)}
                  </Typography>
                  <Typography variant="caption">total</Typography>
                </div>
              </div>
              <RoundedButton
                component={Link}
                to="/checkout"
                size="large"
                variant="contained"
                color="primary"
                fullWidth
                disableElevation
              >
                Book Now
              </RoundedButton>
            </div>
            <Divider />
            {spot.facility.restrictions.length > 0 && (
              <div className={classes.spotDetailsSection}>
                <SectionTitle variant="h6">Things You Should Know</SectionTitle>
                <ul className="list-disc">
                  {spot.facility.restrictions.map((restriction, index) => (
                    <li key={index} className="spotDetailsFacilityRestriction">
                      {restriction}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Divider />
            <div className={classes.spotDetailsSection}>
              <SectionTitle variant="h6">Amenities</SectionTitle>
              <div className="amenityIconsContainer">
                {spot.hourly_rates.amenities.map(amenity => (
                  <div className="amentityIconContainer flex mb-2">
                    <img
                      className={clsx(classes.amenityIcon, "mr-1")}
                      src={amenity.icon_url}
                    />
                    <Typography variant="body2">{amenity.name}</Typography>
                  </div>
                ))}
              </div>
            </div>
            <Divider />
            <div className={classes.spotDetailsSection}>
              <SectionTitle variant="h6">Access Hours</SectionTitle>
              {spot.facility.hours_of_operation.text.map((text, index) => (
                <Typography key={index} variant="body2">
                  {text}
                </Typography>
              ))}
            </div>
            <Divider />
            <div className={classes.spotDetailsSection}>
              <SectionTitle variant="h6">How to Redeem</SectionTitle>
              {spot.facility.redemption_instructions.map((step, index) => (
                <div className="flex my-3" key={step.id}>
                  <Typography className="mr-2" variant="body2">
                    {index + 1}.
                  </Typography>
                  <Typography variant="body2">{step.text}</Typography>
                </div>
              ))}
            </div>
            <Divider />
            <div className={classes.spotDetailsSection}>
              <SectionTitle variant="h6">Getting There</SectionTitle>
              <Typography variant="body2">
                {spot.facility.getting_here}
              </Typography>
            </div>
            <Divider />
            <div
              className={clsx(
                classes.spotDetailsSection,
                classes.footerContainer
              )}
            >
              <SpotDetailDrawerFooter />
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default SpotDetailDrawer;
