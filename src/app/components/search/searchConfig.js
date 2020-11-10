import { lazy } from "react";

export const SearchConfig = {
  routes: [
    {
      path: "/search",
      component: lazy(() => import("./Search")),
    },
  ],
};
