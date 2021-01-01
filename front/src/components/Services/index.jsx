import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-reveal/Zoom";
class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="services">
        <div className="services__title">
          <h2>Mes Services</h2>
          <span>Des prestations adaptées à vos besoins</span>
        </div>
        <div className="services__skills">
          <ul>
            <li className="services__skills__skill">
              <Zoom>
                <div className="services__skills__skill__img">
                  <span>
                    <FontAwesomeIcon icon="lightbulb" size="2x" />
                  </span>
                </div>
                <div className="services__skills__skill__content">
                  <h3>GESTION DE PROJETS WEB</h3>
                  <p>Site vitrine, corporate, évènementiel.</p>
                </div>
              </Zoom>
            </li>
            <li className="services__skills__skill">
              <Zoom>
                <div className="services__skills__skill__img">
                  <span>
                    <FontAwesomeIcon icon="pencil-ruler" size="2x" />
                  </span>
                </div>
                <div className="services__skills__skill__content">
                  <h3>INTÉGRATION WEB</h3>
                  <p>Des intégrations respectueuses des standards du Web.</p>
                </div>
              </Zoom>
            </li>
            <li className="services__skills__skill">
              <Zoom>
                <div className="services__skills__skill__img">
                  <span>
                    <FontAwesomeIcon icon="clipboard" size="2x" />
                  </span>
                </div>
                <div className="services__skills__skill__content">
                  <h3>DÉVELOPPEMENTS SPÉCIFIQUES</h3>
                  <p>Des solutions personnalisées à votre coeur de métier.</p>
                </div>
              </Zoom>
            </li>
            <li className="services__skills__skill">
              <Zoom>
                <div className="services__skills__skill__img">
                  <span>
                    <FontAwesomeIcon icon={["fab", "leanpub"]} size="2x" />
                  </span>
                </div>
                <div className="services__skills__skill__content">
                  <h3>RÉFÉRENCEMENT NATUREL</h3>
                  <p>
                    Affichage sémantique des informations, des pages propres
                    pour un référencement optimal.
                  </p>
                </div>
              </Zoom>
            </li>
            <li className="services__skills__skill">
              <Zoom>
                <div className="services__skills__skill__img">
                  <span>
                    <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
                  </span>
                </div>
                <div className="services__skills__skill__content">
                  <h3>APPLICATIONS WEB DYNAMIQUES AVEC REACT.JS</h3>
                  <p>
                    Une référence incontournable pour le développement
                    d'expériences riches et confortable pour l'utilisateur
                    final.
                  </p>
                </div>
              </Zoom>
            </li>
            <li className="services__skills__skill">
              <Zoom>
                <div className="services__skills__skill__img">
                  <span>
                    <FontAwesomeIcon icon="cogs" size="2x" />
                  </span>
                </div>
                <div className="services__skills__skill__content">
                  <h3>INTERFACE D'ADMINISTRATION PERSONALISEES</h3>
                  <p>
                    Une interface spécifique au bon fonctionnement de votre
                    entreprise.
                  </p>
                </div>
              </Zoom>
            </li>
            <li className="services__skills__skill">
              <Zoom>
                <div className="services__skills__skill__img">
                  <span>
                    <FontAwesomeIcon icon="mobile-alt" size="2x" />
                  </span>
                </div>
                <div className="services__skills__skill__content">
                  <h3>RESPONSIVE DESIGN</h3>
                  <p>Compatible tous supports (Mobile, Tablette et Desktop).</p>
                </div>
              </Zoom>
            </li>
            <li className="services__skills__skill">
              <Zoom>
                <div className="services__skills__skill__img">
                  <span>
                    <FontAwesomeIcon icon="lock" size="2x" />
                  </span>
                </div>
                <div className="services__skills__skill__content">
                  <h3>SÉCURITÉ</h3>
                  <p>
                    Prévention des différentes types d'attaques, confidentialité
                    des informations transmises
                  </p>
                </div>
              </Zoom>
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
  connect(mapStateToProps, mapDispatchToProps)(Services)
);
