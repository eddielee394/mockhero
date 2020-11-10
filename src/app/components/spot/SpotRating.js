import { Box, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import { generateStarRatingLabel } from "../../utils/utils";

const useStyles = makeStyles((theme) => ({
  ratingContainer: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
  rating: {
    marginRight: theme.spacing(1),
  },
}));

export const SpotRating = ({ starRating, numberOfRatings }) => {
  const classes = useStyles();

  return (
    <div className={classes.ratingContainer}>
      <Rating
        value={starRating}
        defaultValue={0}
        size="small"
        className={classes.rating}
        readOnly
      />
      <Box>
        <Typography variant="caption">
          {generateStarRatingLabel(starRating)}({numberOfRatings})
        </Typography>
      </Box>
    </div>
  );
};
