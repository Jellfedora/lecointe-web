import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-scroll";

import Logo from "../../ressources/images/logo.png";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header" id="header">
        <div className="header__logo">
          <img src={Logo} alt="Lecointe Web Logo" />
        </div>
        <div className="header__links">
          <ul>
            <li>
              <Link to="home" smooth={true} offset={-10}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} offset={-10}>
                Services
              </Link>
            </li>
            {/* <li>
              <Link to="price" smooth={true} offset={-10}>
                Devis
              </Link>
            </li> */}
            <li className="header__links__r-link">
              <Link to="about" smooth={true} offset={-10}>
                À Propos
              </Link>
            </li>
            <li className="header__links__r-link">
              <Link to="contact" smooth={true} offset={-10}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
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
  return {};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
