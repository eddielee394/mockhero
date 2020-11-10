import { Typography, withStyles } from "@material-ui/core";

export const SectionTitle = withStyles({
  h6: {
    fontSize: "1rem",
    fontWeight: 700,
    marginBottom: ".5rem",
  },
})(Typography);

SectionTitle.propTypes = {
  ...Typography.Naked.propTypes,
};
