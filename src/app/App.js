import React from "react";
import { Provider } from "react-redux";
import { StylesProvider } from "@material-ui/core/styles";
import { Router } from "react-router";
import AppContext from "./appContext";
import Layout from "./components/ui/layout/layout";
import Theme from "./components/ui/theme/theme";
import routes from "./config/routesConfig";
import store from "./store";
import history from "./utils/@history";
import "../assets/styles/index.css";

const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <StylesProvider injectFirst>
        <Router history={history}>
          <Provider store={store}>
            <Theme>
              <Layout />
            </Theme>
          </Provider>
        </Router>
      </StylesProvider>
    </AppContext.Provider>
  );
};

export default App;
