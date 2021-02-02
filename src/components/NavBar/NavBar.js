import React, { Component } from "react";
import { ReactComponent as CloseMenu } from "../../assests/Icons/x.svg";
import { ReactComponent as MenuIcon } from "../../assests/Icons/menu.svg";
import { Input, FormGroup } from "reactstrap"
import { Link } from 'react-router-dom';
import "./NavBar.scss";

class NavBar extends Component {
  state = {
    click: false,
    searchValue: ""
  }
  handleClick = () => {
    this.setState({ click: !this.state.click })
  }
  closeMobileMenu = () => {
    this.setState({ click: false })
  }
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-left">
          <div className="logo-nav">
            <div className="logo-container">
              {/* <a href="#"><img src={require("../../assests/images/logo.png")} /></a> */}
            </div>

            <ul className={this.state.click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={this.closeMobileMenu}>
                <Link to="/">Home</Link>
              </li>
              <li className="option" onClick={this.closeMobileMenu}>
                <Link to="/allNews">Category</Link>
              </li>
              <li className="option" onClick={this.closeMobileMenu}>
                <Link to="/allNews">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="mobile-menu" onClick={this.handleClick}>
            {this.state.click ? (
              <CloseMenu className="menu-icon" />
            ) : (
                <MenuIcon className="menu-icon" />
              )}
          </div>
        </div>
        {/* <ul className="nav-right">
          <li onClick={this.closeMobileMenu}>
            <a href="#">
              <i className="fa fa-bell-o" aria-hidden="true"></i>
            </a>
          </li>

        </ul> */}
      </div>
    )
  }
};

export default NavBar;
