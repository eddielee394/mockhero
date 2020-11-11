import { List, ListItem } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spot from "../spot/Spot";
import { getSpots, selectSpots } from "./spotsSlice";
import { getSpot } from "../spot/store/spotSlice";

const Spots = () => {
  const spots = useSelector(({ spots }) => spots);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpots());
  }, []);

  return (
    <>
      <div className="spotListSort">Sort by Distance</div>
      <List>
        {spots.data.map((spot) => (
          <ListItem key={spot.spotId}>
            <Spot spot={spot} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Spots;
