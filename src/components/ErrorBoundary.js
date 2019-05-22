/* eslint prefer-destructuring:0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

const SENTRY_DSN = process.env.SENTRY_DSN;
Sentry.init({ dsn: SENTRY_DSN });

// Modified code from Sentry docs.

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      Sentry.showReportDialog();
    }
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, hasError: true });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // render fallback UI
      return (
        <button
          onClick={() => Sentry.showReportDialog()}
          onKeyPress={this.handleKeyPress}
          role="link"
          tabIndex={0}
          type="button"
        >
          Report feedback
        </button>
      );
    }
    // when there's not an error, render children untouched
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
