/* eslint prefer-destructuring: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import User from './User';
import Signout from './Signout';
import './header.scss';

class Header extends Component {
  state = {
    open: false,
  };

  toggleOpen = () => this.setState(state => ({ open: !state.open }));

  handleKeyPress = ({ keyCode }) => {
    if (keyCode === 32) {
      this.toggleOpen();
    }
  };

  render() {
    const { siteTitle } = this.props;
    const { open } = this.state;
    let hamburger = 'hamburger';
    let overlay = 'nav-overlay';
    let isOpen = '';
    if (open) {
      hamburger += ' open';
      overlay += ' open';
      isOpen += 'open';
    }
    return (
      <User>
        {payload => {
          let me = null;
          if (payload && payload.data && payload.data.me) {
            me = payload.data.me;
          }
          return (
            <header className={isOpen}>
              <h1>
                <Link to="/">{siteTitle}</Link>
              </h1>
              <div className="nav-container">
                <div className={overlay} />
                <nav className={isOpen}>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/gift">Give Gift</Link>
                    </li>
                    <li>
                      <Link to="/our-story">Our Story</Link>
                    </li>
                    <li>
                      <Link to="/things-to-do">Things To Do</Link>
                    </li>
                    <li>
                      <Link to="/travel">Accomodations</Link>
                    </li>
                    {me && (
                      <li>
                        <Link to="/history">Gift History</Link>
                      </li>
                    )}
                    {me && me.permissions.includes('ADMIN') && (
                      <li>
                        <Link to="/guest-management">Admin</Link>
                      </li>
                    )}
                    {me ? (
                      <li>
                        <Signout />
                      </li>
                    ) : (
                      <>
                        <li>
                          <Link to="/rsvp">RSVP</Link>
                        </li>
                        <li>
                          <Link to="/signin">Login</Link>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
                <div
                  className={hamburger}
                  onClick={this.toggleOpen}
                  onKeyPress={this.handleKeyPress}
                  tabIndex={0}
                  role="switch"
                  aria-checked={open}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </header>
          );
        }}
      </User>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
