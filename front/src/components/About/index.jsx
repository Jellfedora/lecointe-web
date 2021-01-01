import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Flip from "react-reveal/Flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 0,
      leftIsDisabled: true,
      rightIsDisabled: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // Change arrow color and show/hide text
  handleClick = (number) => {
    var result = number + this.state.show;

    if (result === 0) {
      // On bloque le clic gauche
      this.setState({
        leftIsDisabled: true,
        rightIsDisabled: false,
        show: result,
      });
    } else if (result === 2) {
      // On bloque le clic droit
      this.setState({
        rightIsDisabled: true,
        leftIsDisabled: false,
        show: result,
      });
    } else {
      this.setState({
        rightIsDisabled: false,
        leftIsDisabled: false,
        show: result,
      });
    }
  };

  render() {
    return (
      <div className="about">
        <div className="about__title">
          <h2>À propos</h2>
          <span>Un concepteur développeur web passionné !</span>
        </div>
        <div className="about__content">
          <Flip bottom when={this.state.show === 0}>
            <div className="about__content__text">
              <h3>
                Un freelance en Charentes-Maritime passionné par la création web
                !
              </h3>
              <p>
                Ma passion pour le développement commence en 2016 et c'est 2 ans
                aprés que je décide d'en faire mon métier et de me reconvertir.
              </p>
              <p>
                En 2020 j'obtiens le diplôme de Concepteur développeur
                d'applications d'un niveau 6 (License) et c'est ensuite que je
                décide de devenir développeur indépendant et que je fonde mon
                entreprise.
              </p>
            </div>
          </Flip>
          <Flip top when={this.state.show === 1}>
            <div className="about__content__text">
              <h3>Des technologies modernes et réputées !</h3>
              <p>
                J'utilise principalement la librairie React.js et le framework
                Symfony en architecture multicouches. Les bénéfices des bonnes
                pratiques pour l'architecture des applications web n'est pas
                seulement technique. Elle permet aussi de créer une expérience
                utilisateur plus raffinée et adaptée aux usages d'aujourd'hui.
              </p>
              <p></p>
            </div>
          </Flip>
          <Flip bottom when={this.state.show === 2}>
            <div className="about__content__text">
              <h3>Au plus prés de votre besoin !</h3>
              <p>
                Lors de mes précédentes expériences j'ai appris à comprendre les
                attentes de l'utilisateur final et je sais développer la
                solution correspondant précisément au besoin demandé. De plus je
                veille à sécuriser mes projets en effectuant assidument une
                veille sur les principales failles révéllées.
              </p>
              <p>
                Du site vitrine au projet plus complexe, je vous propose une
                expertise et un développement web qui correspond à vos attentes
                et à vos besoins !
              </p>
            </div>
          </Flip>
          <div className="about__content__arrows">
            <button
              className="btn btn-success my-5"
              type="button"
              onClick={() => this.handleClick(-1)}
              disabled={this.state.leftIsDisabled}
              style={{
                color: this.state.leftIsDisabled ? "#8f8f8f" : "#8bc8fb",
              }}
            >
              <FontAwesomeIcon icon="arrow-left" size="2x" />
            </button>
            <button
              className="btn btn-success my-5"
              type="button"
              onClick={() => this.handleClick(+1)}
              disabled={this.state.rightIsDisabled}
              style={{
                color: this.state.rightIsDisabled ? "#8f8f8f" : "#8bc8fb",
              }}
            >
              <FontAwesomeIcon icon="arrow-right" size="2x" />
            </button>
          </div>
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(About));
