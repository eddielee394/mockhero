import React, { Suspense, useContext } from "react";
import { renderRoutes } from "react-router-config";
import clsx from "clsx";
import { makeStyles, CssBaseline } from "@material-ui/core";
import AppContext from "../../../appContext";
import Heading from "./heading";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  content: {
    flex: "1 1 auto",
    "-webkit-overflow-scrolling": "touch",
    zIndex: 2,
  },
}));

function Layout(props) {
  const appContext = useContext(AppContext);
  const classes = useStyles(props);
  const { routes } = appContext;

  return (
    <>
      <CssBaseline />
      <div
        className={clsx(
          classes.root,
          "flex flex-grow relative overflow-hidden w-full h-full"
        )}
      >
        <div className="max-w-screen flex flex-1 flex-col relative items-center">
          <Heading />
          <div className={clsx(classes.content, "flex relative w-full")}>
            {/*<div>*/}
            <Suspense fallback={<div>Loading...</div>}>
              {renderRoutes(routes)}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
