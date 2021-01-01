import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="price">
        <div className="price__title">
          <h2>Obtenir un devis</h2>
          <span>( gratuitement )</span>
        </div>
        <div className="price__content">
          <p>
            Je vous propose de répondre à quelques questions qui me permettront
            d'avoir une idée claire de votre projet web afin d'établir un devis
            précis. Certaines questions vous posent problème ? Pas de souci ! Je
            suis là pour vous épauler, nous y reviendrons ensemble rapidement.*
          </p>
          <button>Obtenir un devis</button>
          <small>*Réponse sous 72h</small>
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
