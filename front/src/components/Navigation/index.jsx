import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../Header";
import Banner from "../Banner";
import Services from "../Services";
import Parallax from "../Parallax";
// import Price from "../Price";
import About from "../About";
import Contact from "../Contact";
import Footer from "../Footer";
import FloatMenu from "../FloatMenu";
import ScrollToTop from "../ScrollToTop";
import HeaderOther from "../HeaderOther ";
import Legal from "../Legal";

import Computer from "../../ressources/images/computer.jpg";
import Server from "../../ressources/images/server.jpg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/legal">
              <ScrollToTop showForMobile={true} />
              <HeaderOther />
              {/* <Parallax image={Computer} align="left" /> */}
              <Legal />
            </Route>
            <Route path="/">
              <FloatMenu />
              <ScrollToTop showForMobile={false} />
              <Header />
              <Banner />
              <Parallax image={Computer} align="left" />
              <Services />
              <Parallax image={Server} align="center" />
              {/* <Price /> */}
              {/* <hr className="app__divider" /> */}
              <About />
              <hr className="app__divider" />
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    // isStart: state.home.isStart,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
