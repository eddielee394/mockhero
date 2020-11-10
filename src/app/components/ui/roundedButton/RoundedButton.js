import React from "react";
import { Button, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

export const RoundedButton = withStyles({
  root: {
    borderRadius: "20px",
  },
  label: {
    textTransform: "capitalize",
  },
})(Button);

RoundedButton.propTypes = {
  ...Button.Naked.propTypes,
};
