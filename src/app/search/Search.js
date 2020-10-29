import React, { useRef, useState } from "react";
import {
  Divider,
  Drawer,
  makeStyles,
  Tab,
  Tabs,
  Typography
} from "@material-ui/core";
import SearchInput from "../SpotSearch/SearchInput";
import SearchMap from "../SpotSearch/SearchMap";
import SpotList from "../SpotSearch/SpotList";

const drawerWidth = 480;

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    width: "100%"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto",
    padding: 10
  },
  content: {
    flexGrow: 1,
    position: "relative"
  },
  spotListHeading: {
    textAlign: "center"
  },
  searchSection: {
    marginBottom: "15px"
  },
  offset: theme.mixins.toolbar
}));
const Search = () => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  function handleSearchControlTabChange(event, tabIndex) {
    setValue(tabIndex);
  }

  const contentContainerRef = useRef();

  return (
    <div className={classes.container}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.offset} />
        <div className={classes.drawerContainer}>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleSearchControlTabChange}
          >
            {" "}
            <Tab label="Hourly" /> <Tab label="Monthly" />{" "}
          </Tabs>
          <div className={classes.spotListHeading}>
            <Typography variant="h6">Chicago Parking</Typography>{" "}
            <Typography variant="caption">
              {" "}
              Save on parking in Chicago{" "}
            </Typography>
          </div>
          <div className={classes.searchSection}>
            <SearchInput />
            <div className={classes.searchSection}>
              <SearchDateTimePickers />
            </div>
            <div className={classes.searchSection}>
              <SearchQuickFilters />
            </div>
          </div>
          <Divider />
          <div className="spotListContainer">
            <SpotList />
          </div>
        </div>
      </Drawer>
      <div
        id="contentContainer"
        className={classes.content}
        ref={contentContainerRef}
      >
        <SpotListDetailDrawer containerRef={contentContainerRef} />{" "}
        <SearchMap />
      </div>
    </div>
  );
};

export default Search;
