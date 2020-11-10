import { lazy } from "react";

export const CheckoutConfig = {
  routes: [{ path: "/checkout", component: lazy(() => import("./Checkout")) }],
};
