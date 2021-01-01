import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeafletMap from "../LeafletMap";
import Zoom from "react-reveal/Zoom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__title">
          <h2>Contact</h2>
          <span>Vous avez un projet ? Contactez moi !</span>
        </div>
        <div className="contact__infos">
          <Zoom>
            <div className="contact__infos__info">
              <FontAwesomeIcon icon="map-signs" size="1x" />
              <div className="contact__infos__info__text">
                <h3>ADRESSE</h3>
                <a href="https://www.google.com/maps/@37JM+MQ Saint-Mardz?hl=LANGUAGE">
                  204, grand rue <br />
                  17000 Saint Mard
                </a>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="contact__infos__info">
              <FontAwesomeIcon icon="phone" size="1x" />
              <div className="contact__infos__info__text">
                <h3>TELEPHONE</h3>
                <a href="tel:0750475870">07 50 47 58 70</a>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="contact__infos__info">
              <FontAwesomeIcon icon="envelope" size="1x" />
              <div className="contact__infos__info__text">
                <h3>E-MAIL</h3>
                <a href="mailto:lecointe.web@gmail.com">
                  lecointe.web@gmail.com
                </a>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="contact__infos__info">
              <FontAwesomeIcon icon="clock" size="1x" />
              <div className="contact__infos__info__text">
                <h3>HORAIRES</h3>
                <p>
                  Lundi - Vendredi :<br /> 09H00 - 19H00
                </p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="contact__infos__info">
              <FontAwesomeIcon icon="cogs" size="1x" />
              <div className="contact__infos__info__text">
                <h3>SIRET</h3>
                <p>51387142600021</p>
              </div>
            </div>
          </Zoom>
        </div>
        <div className="contact__map">
          <LeafletMap />
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
  connect(mapStateToProps, mapDispatchToProps)(Contact)
);
