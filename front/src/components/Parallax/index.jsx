import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class Parallax extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="parallax"
        style={{
          backgroundImage: `url(${this.props.image})`,
          backgroundPosition: this.props.align,
        }}
      ></div>
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
  connect(mapStateToProps, mapDispatchToProps)(Parallax)
);
