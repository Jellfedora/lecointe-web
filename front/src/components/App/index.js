import React from "react";
// Import Google Analytics
import ReactGA from "react-ga";
// Import Redux Store
import { Provider } from "react-redux";
import store from "../../store";
// Import Sass
import "../../styles/index.scss";
// Import Components
import Navigation from "../Navigation";
// Fontawesome 5
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLightbulb,
  faMobileAlt,
  faPencilRuler,
  faClipboard,
  faCogs,
  faMapSigns,
  faEnvelope,
  faPhone,
  faLock,
  faArrowRight,
  faArrowLeft,
  faBars,
  faClock,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFontAwesomeFlag,
  faReact,
  faLeanpub,
} from "@fortawesome/free-brands-svg-icons"; //For brand icons
library.add(
  faFontAwesomeFlag,
  faLightbulb,
  faReact,
  faMobileAlt,
  faLeanpub,
  faPencilRuler,
  faClipboard,
  faCogs,
  faMapSigns,
  faEnvelope,
  faPhone,
  faLock,
  faArrowRight,
  faArrowLeft,
  faBars,
  faClock,
  faArrowUp
);

const gAId = process.env.REACT_APP_GOOGLE_ANALYTICS;
ReactGA.initialize(gAId);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};
export default App;
