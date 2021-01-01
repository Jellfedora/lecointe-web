import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div name="home" className="banner">
        <h1>Lecointe Web</h1>
        <span>
          Création de sites vitrine, corporate, évènementiel et e-commerce
        </span>
        <p>
          Je construit des sites web pour les clients qui ont besoin de créer
          quelque chose de vraiment spécial. Je le fais avec passion et
          professionalisme et je peut le faire pour vous aussi.
        </p>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Banner));
