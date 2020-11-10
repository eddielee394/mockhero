import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Button,
  Toolbar,
  makeStyles,
  Hidden,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function Heading(props) {
  const classes = useStyles(props);

  return (
    <AppBar position="fixed" className={clsx(classes.appBar, "flex relative")}>
      <div className="flex-row">
        <Toolbar className="mx-auto">
          <div className={clsx("flex sm:w-1/5")}>
            <Button component={Link} to="/">
              <Typography variant="h6" noWrap style={{ color: "white" }}>
                MockHero
              </Typography>
            </Button>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

export default Heading;
