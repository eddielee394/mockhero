import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import {
  Chip,
  Divider,
  Drawer,
  makeStyles,
  Tab,
  Tabs,
  Typography
} from "@material-ui/core";
import { Tune } from "@material-ui/icons";
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import SearchInput from "./SearchInput";
import SearchMap from "./SearchMap";
import SpotList from "./SpotList";

function SpotListDetailDrawer({ containerRef }) {
  const useStyles = makeStyles(theme => ({
    modal: {
      position: "absolute !important"
    },
    paper: {
      position: "absolute"
    },
    backdropRoot: {
      position: "absolute"
    }
  }));
  const { showSpotDetailsModal } = useSelector(({ spot }) => spot);

  const classes = useStyles();
  return (
    <Drawer
      open={showSpotDetailsModal}
      ModalProps={{
        container: containerRef.current
      }}
      BackdropProps={{ classes: { root: classes.backdropRoot } }}
      classes={{
        modal: classes.modal,
        paper: classes.paper
      }}
    >
      <div>Drawer is open</div>
    </Drawer>
  );
}

const SearchDateTimePickers = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection: "column"
    },
    inputControl: {
      maxWidth: "200px"
    },
    datePickerContainer: {
      display: "flex",
      justifyContent: "space-between"
    }
  }));

  const [selectedDateTime, setSelectedDateTime] = useState();
  const classes = useStyles();

  function handledDateTimeChange() {
    console.log("date time changed");
  }

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.datePickerContainer}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            label="Enter After"
            value={selectedDateTime}
            onChange={handledDateTimeChange}
            KeyboardButtonProps={{
              "aria-label": "exit after"
            }}
            className={classes.inputControl}
          />{" "}
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Exit Before"
            value={selectedDateTime}
            onChange={handledDateTimeChange}
            KeyboardButtonProps={{
              "aria-label": "exit before"
            }}
            className={classes.inputControl}
          />
        </div>
        <div className={classes.datePickerContainer}>
          <KeyboardTimePicker
            disableToolbar
            variant="inline"
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDateTime}
            onChange={handledDateTimeChange}
            KeyboardButtonProps={{
              "aria-label": "enter after"
            }}
            className={classes.inputControl}
          />{" "}
          <KeyboardTimePicker
            disableToolbar
            variant="inline"
            margin="normal"
            id="time-picker"
            label="Time picker"
            value={selectedDateTime}
            onChange={handledDateTimeChange}
            KeyboardButtonProps={{
              "aria-label": "enter after"
            }}
            className={classes.inputControl}
          />
        </div>
      </MuiPickersUtilsProvider>
    </div>
  );
};

const SearchQuickFilters = () => {
  const useStyles = makeStyles(theme => ({
    spotListFilterContainer: {
      display: "flex",
      justifyContent: "space-between"
    },
    spotListFilterChip: {
      marginRight: "5px"
    }
  }));

  const classes = useStyles();

  function handleOpenFilterModal() {
    console.log("open filter modal");
  }

  return (
    <div className={classes.spotListFilterContainer}>
      <div>
        <Chip label="Self Park" className={classes.spotListFilterChip} />{" "}
        <Chip label="Touchless" className={classes.spotListFilterChip} />
      </div>
      <Chip
        icon={<Tune />}
        label="Filter"
        clickable
        color="primary"
        onClick={handleOpenFilterModal}
      />
    </div>
  );
};

const SpotSearch = () => {
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

export default SpotSearch;
