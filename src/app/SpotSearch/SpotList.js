import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
  List,
  ListItem,
  Typography,
  makeStyles
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { spot } from "./store";
import { openSpotDetailsModal, closeSpotDetailsModal } from "./store/spotSlice";

const SpotListItem = () => {
  const useStyles = makeStyles(theme => ({
    card: {
      display: "flex",
      width: "100%",
      padding: theme.spacing(1)
    },
    cardContainer: {
      display: "flex",
      flexGrow: 1
    },
    cardContent: {
      flexGrow: 1
    },
    imageContainer: {},
    spotItemDetailsContainer: {
      display: "flex",
      justifyContent: "space-between"
    },
    spotItemAvatar: {
      height: "100%",
      width: "80px",
      marginRight: "10px"
    },
    spotItemActions: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }));

  const { showSpotDetailsModal } = useSelector(({ spot }) => spot);
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleShowSpotItemDetails() {
    dispatch(openSpotDetailsModal(true));
  }
  
  return (
    <Card className={classes.card} onClick={handleShowSpotItemDetails}>
      <div className={classes.cardContainer}>
        <Avatar variant="rounded" src="" className={classes.spotItemAvatar} />
        <div className={classes.cardContent}>
          <div className={classes.spotItemDetailsContainer}>
            <div className="spotItemDetailsInfo">
              <Typography variant="body1">SpotItemTitle</Typography>
              <div className="spotItemReviews">SpotItemReviews</div>
              <div className="spotItemDistance">SpotItemDistance</div>
            </div>
            <div className="spotItemDetailsPrice">
              <Typography>Price</Typography>
              <Typography variant="caption">total</Typography>
            </div>
          </div>
          <div className={classes.spotItemActions}>
            <span>Details</span>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

const SpotList = () => {
  return (
    <>
      <div className="spotListSort">Sort by Distance</div>
      <List>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(
          (text, index) => (
            <ListItem key={text}>
              <SpotListItem />
            </ListItem>
          )
        )}
      </List>
    </>
  );
};

export default SpotList;
