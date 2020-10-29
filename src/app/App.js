import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import SpotSearch from "./SpotSearch";
import store from "./store";
import { Provider } from "react-redux";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Header
            </Typography>
          </Toolbar>
        </AppBar>
        <SpotSearch />
      </div>
    </Provider>
  );
};

export default App;
