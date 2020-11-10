import React from "react";
import { Chip, makeStyles } from "@material-ui/core";
import { Tune } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  filterMenuButton: {
    color: theme.palette.text.primary,
  },
}));

export const SearchQuickFilters = () => {
  const classes = useStyles();

  function handleOpenFilterModal() {
    console.log("open filter modal");
  }

  return (
    <div className="flex justify-between">
      <div className="filterItemContainer">
        <Chip label="Self Park" className="mr-3" clickable />
        <Chip label="Touchless" className="mr-3" clickable />
      </div>
      <Chip
        icon={<Tune />}
        classes={{
          label: classes.filterMenuButton,
        }}
        variant="outlined"
        label="Filter"
        color="primary"
        onClick={handleOpenFilterModal}
        clickable
      />
    </div>
  );
};
