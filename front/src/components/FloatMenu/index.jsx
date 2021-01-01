import React, { Component } from "react";
import { Link } from "react-scroll";
import Logo from "../../ressources/images/logo.png";
import Fade from "react-reveal/Fade";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class FloatMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menuOpen: false,
    };
  }

  componentDidUpdate() {}

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
    this.listenToScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({
      theposition: scrolled,
    });
    // If to top hide float menu
    if (scrolled === 0) {
      this.setState({
        showMenu: false,
      });
    } else {
      this.setState({
        showMenu: true,
      });
    }
    this.closeMenu();
  };

  //   MENU
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  toggleMenu() {
    this.setState((state) => ({
      menuOpen: !state.menuOpen,
      showMenu: !state.showMenu,
    }));
  }
  render() {
    return (
      <div className="float-menu">
        <Fade right when={this.state.showMenu}>
          <button
            className="float-menu__button"
            onClick={() => this.toggleMenu()}
          >
            <FontAwesomeIcon icon="bars" size="2x" />
          </button>
        </Fade>
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <div className="float-menu__img">
            <img src={Logo} alt="Lecointe Web Logo" />
          </div>
          <div className="float-menu__links">
            <Link
              className="float-menu__links__link"
              to="home"
              smooth={true}
              offset={-10}
            >
              Accueil
            </Link>
            <Link
              className="float-menu__links__link"
              to="services"
              smooth={true}
              offset={-10}
            >
              Services
            </Link>

            {/* <Link
            className="float-menu__links__link"
            to="price"
            smooth={true}
            offset={-10}
          >
            Devis
          </Link> */}

            <Link
              className="float-menu__links__link"
              to="about"
              smooth={true}
              offset={-10}
            >
              À Propos
            </Link>

            <Link
              className="float-menu__links__link"
              to="contact"
              smooth={true}
              offset={-10}
            >
              Contact
            </Link>
          </div>
        </Menu>
      </div>
    );
  }
}
export default FloatMenu;
