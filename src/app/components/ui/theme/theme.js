import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import themesConfig from "../../../config/themeConfig";

function Theme({ children }) {
  const mainTheme = createMuiTheme(themesConfig.default);

  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.element,
};

export default Theme;
