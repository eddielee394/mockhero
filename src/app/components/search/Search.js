import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Breadcrumbs,
  Divider,
  Drawer,
  makeStyles,
  Typography,
  Link,
} from "@material-ui/core";
import SpotDetailDrawer from "../spotDetailDrawer/SpotDetailDrawer";
import Spots from "../spots/Spots";
import SearchDateTimePickers from "./searchControls/SearchDateTimePickers";
import SearchInput from "./searchControls/SearchInput";
import SearchMap from "./searchMap/SearchMap";
import { SearchQuickFilters } from "./searchControls/SearchQuickFilters";
import { getSearchData } from "./searchSlice";

const drawerWidth = 480;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    padding: 10,
  },
  searchSection: {
    marginBottom: "15px",
  },
  offset: theme.mixins.toolbar,
}));

const routeParams = {};

const Search = () => {
  const classes = useStyles();

  const search = useSelector(({ search }) => search);

  const contentContainerRef = useRef();
  const mapContainerRef = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearchData(routeParams));
  }, []);

  return (
    <div className={classes.container} ref={contentContainerRef}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.offset} />
        {!search.isPending && (
          <div className={classes.drawerContainer}>
            <div className="flex">
              <div className="searchBreadcrumbs">
                <Breadcrumbs separator="›">
                  <Link href={search.data.breadcrumbs.city.relativeUrl}>
                    {search.data.breadcrumbs.city.displayName}
                  </Link>
                  <Typography>
                    {search.data.breadcrumbs.activeBreadcrumb.label}
                  </Typography>
                </Breadcrumbs>
              </div>
            </div>
            <div className="searchHeadingContainer text-center">
              <Typography variant="h6">Chicago Parking</Typography>
              <Typography variant="caption">
                Save on parking in Chicago 644666
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
              <Spots />
            </div>
          </div>
        )}
      </Drawer>
      <div
        id="mapContainer"
        className="flex-grow relative"
        ref={mapContainerRef}
      >
        <SpotDetailDrawer containerRef={mapContainerRef} />
        <SearchMap />
      </div>
    </div>
  );
};

export default Search;
