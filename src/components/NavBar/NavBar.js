import React, { Component } from "react";

import "./NavBar.scss";
import { ReactComponent as CloseMenu } from '../../assests/Icons/x.svg';
import { ReactComponent as MenuIcon } from '../../assests/Icons/menu.svg';
import { NavLink, Link } from 'react-router-dom';


class NavBar extends Component {
  listener = null;
  state = {
    click: false,
    nav: false,
    flag: null,
  };
  handleClick = () => {
    this.setState({ click: !this.state.click });
  };
  closeMobileMenu = () => {
    this.setState({ click: false });
  };
  render() {
    return (
      <div className="responsive_nav">
        <div className="container">
          <div className="logo-nav">
            <ul className={this.state.click ? 'nav-options active' : 'nav-options'}>
              <div className="right_menu">
                <li>
                  <NavLink to="/" className="logo_link">
                    <img
                      className="logo_header"
                      src={require('../../assests/Icons/logo_nav.png')}
                    />
                  </NavLink>
                </li>
                <li className="option" onClick={this.closeMobileMenu}>
                  <NavLink exact to="/" activeClassName="active">
                    Home
									</NavLink>
                </li>
                <li className="option" onClick={this.closeMobileMenu}>
                  <NavLink exact to="/contact-us">
                    Contact us
									</NavLink>
                </li>

              </div>

            </ul>
          </div>
        </div>
        <div className="mobile-menu" onClick={this.handleClick}>
          {this.state.click ? <CloseMenu className="menu-icon" /> : <MenuIcon className="menu-icon" />}
        </div>
      </div>
    );
  }
}


export default NavBar
