/* eslint prefer-destructuring: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import User from './User';
import Signout from './Signout';
import formatMoney from '../utils/formatMoney';
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
            <header>
              <h1>
                <Link to="/">{siteTitle}</Link>
              </h1>
              {me && (
                <div className="profile">
                  <p>{formatMoney(me.balance)}</p>
                  <img
                    src={`https://api.adorable.io/avatars/100/${encodeURI(me.id)}@adorable.png`}
                    alt="Avatar"
                    width="50"
                    height="50"
                  />
                </div>
              )}
              <div className="nav-container">
                <div className={overlay} />
                <nav className={isOpen}>
                  <ul>
                    {me ? (
                      <li>
                        <Signout />
                      </li>
                    ) : (
                      <li>
                        <Link to="/signin">Login</Link>
                      </li>
                    )}
                    <li>
                      <Link to="/">Pricing</Link>
                    </li>
                    {me && (
                      <>
                        <li>
                          <Link to="/emails">Settings</Link>
                        </li>
                        <li>
                          <Link to="/history">History</Link>
                        </li>
                        <li>
                          <Link to="/add-funds">Add Funds</Link>
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
