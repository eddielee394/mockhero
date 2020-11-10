import { red } from "@material-ui/core/colors";

const themesConfig = {
  default: {
    palette: {
      type: "light",
      primary: {
        light: "#6CABD4",
        main: "#0082ff",
        dark: "#002d5b",
        contrastText: "#F7F8FA",
      },
      secondary: {
        light: "#89F6CF",
        main: "#008547",
        dark: "#006c39",
        contrastText: "#F7F8FA",
      },
      background: {
        paper: "#FFFFFF",
        default: "#f6f7f9",
      },
      overlay: {
        light: {
          1: "rgba(247,248,250,0.25)",
          2: "rgba(247,248,250,0.5)",
          3: "rgba(247,248,250,0.75)",
        },
        dark: {
          1: "rgba(40,41,40,0.25)",
          2: "rgba(40,41,40,0.5)",
          3: "rgba(40,41,40,0.75)",
        },
      },
      error: red,
    },
    status: {
      danger: "orange",
    },
  },
};

export default themesConfig;
