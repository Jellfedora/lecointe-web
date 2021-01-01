import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import Logo from "../../ressources/images/logo.png";
class HeaderOther extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header" id="header">
        <Link to={"/"} className="header__logo">
          <img src={Logo} alt="Lecointe Web Logo" />
        </Link>
        <div className="header__links">
          <ul>
            <li>
              <Link to={"/"}>revenir à l'accueil</Link>
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
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderOther)
);
