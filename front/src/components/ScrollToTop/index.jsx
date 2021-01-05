import React, { Component } from "react";
import * as Scroll from "react-scroll";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var scroll = Scroll.animateScroll;

class ScrollToTop extends Component {
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
  };

  scrollTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div
        className="scroll-to-top"
        onClick={() => this.scrollTop()}
        style={{ display: this.props.showForMobile ? "inherit" : "none" }}
      >
        <Fade right when={this.state.showMenu}>
          <button className="scroll-to-top__button">
            <FontAwesomeIcon icon="arrow-up" size="2x" />
          </button>
        </Fade>
      </div>
    );
  }
}
export default ScrollToTop;
