import {
  CheckCircle,
  CheckCircleOutline,
  CheckCircleTwoTone,
} from "@material-ui/icons";
import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Button,
  Avatar,
  makeStyles,
  Typography,
  ListItem,
  ListItemIcon,
  List,
  ListItemText,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getCheckoutData } from "./checkoutSlice";
import RegisterGuestForm from "./forms/RegisterGuestForm";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  spotItemAvatar: {
    maxHeight: "64px",
    maxWidth: "64px",
    marginRight: "10px",
  },
  checkoutValuesListIcon: {
    minWidth: "36px",
  },
}));

const Checkout = () => {
  const checkout = useSelector(({ checkout }) => checkout);
  const { spot } = checkout;
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getCheckoutData(routeParams));
  }, []);

  console.log("spot: ", spot);
  return (
    <div className="container mx-auto">
      {spot && (
        <div className="flex -mx-2 py-24">
          <div className="flex flex-col w-2/3 px-2">
            <Card className={classes.card}>
              <CardHeader
                avatar={<CheckCircle color="secondary" />}
                title="Account Info"
              />
              <Divider />
              <CardContent>
                <RegisterGuestForm />
              </CardContent>
            </Card>
            <Card className={classes.card}>Reservation Details</Card>
            <Card className={classes.card}>Payment Details</Card>
          </div>
          <div className="flex flex-col w-1/3 px-2">
            <Card className={classes.card}>
              <div className="flex">
                <Avatar
                  variant="rounded"
                  src={spot.default_image_url}
                  className={classes.spotItemAvatar}
                />
                <Typography
                  className={classes.spotTitle}
                  variant="body2"
                  component="h2"
                >
                  {spot.title}
                </Typography>
              </div>
            </Card>
            <Card className={classes.card}>
              <CardHeader avatar title="Reservation Summary" />
              <CardContent>Content</CardContent>
            </Card>
            <Card className={classes.card}>
              <List dense disablePadding>
                <ListItem>
                  <ListItemIcon className={classes.checkoutValuesListIcon}>
                    <CheckCircleTwoTone color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    secondary="Free cancellation up to your start time"
                    secondaryTypographyProps={{ variant: "subtitle2" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.checkoutValuesListIcon}>
                    <CheckCircleTwoTone color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    secondary="Easily edit or extend your reservation"
                    secondaryTypographyProps={{ variant: "subtitle2" }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.checkoutValuesListIcon}>
                    <CheckCircleTwoTone color="secondary" />
                  </ListItemIcon>
                  <ListItemText
                    secondary="Excellent customer support"
                    secondaryTypographyProps={{ variant: "subtitle2" }}
                  />
                </ListItem>
              </List>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
