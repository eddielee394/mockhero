import { lazy } from "react";

export const ConfirmationConfig = {
  routes: [
    {
      path: "/confirmation/:id",
      component: lazy(() => import("./Confirmation")),
    },
  ],
};
