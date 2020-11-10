import React from "react";
import { Redirect } from "react-router-dom";
import { CheckoutConfig } from "../components/checkout/checkoutConfig";
import { ConfirmationConfig } from "../components/confirmation/confirmationConfig";
import { SearchConfig } from "../components/search/searchConfig";
import { generateRoutesFromConfigs } from "../utils/utils";

const routeConfigs = [SearchConfig, CheckoutConfig, ConfirmationConfig];

const routes = [
  ...generateRoutesFromConfigs(routeConfigs),
  {
    path: "/",
    component: () => <Redirect to="/search" />,
  },
];

export default routes;
