/* eslint react/no-array-index-key: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';

import { SENTRY_DSN } from '../../config';
import { Danger } from '../shared/styledComponents';

Sentry.init({ dsn: SENTRY_DSN });

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((e, i) => (
      <Danger key={i}>
        <p data-test="graphql-error">
          <strong>Dagnabit! </strong>
          {e.message.replace(' GraphQL error: ', '')}
        </p>
        <button
          onClick={() => Sentry.showReportDialog()}
          onKeyPress={ev => {
            if (ev.key === 'Enter') {
              Sentry.showReportDialog();
            }
          }}
          role="link"
          tabIndex={0}
          type="button"
        >
          Report feedback
        </button>
      </Danger>
    ));
  }
  return (
    <Danger>
      <p data-test="graphql-error">
        <strong>Bummer...</strong>
        {error.message.replace(' GraphQL error: ', '')}
      </p>
      <button
        onClick={() => Sentry.showReportDialog()}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            Sentry.showReportDialog();
          }
        }}
        role="link"
        tabIndex={0}
        type="button"
      >
        Report feedback
      </button>
    </Danger>
  );
};

ErrorMessage.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

ErrorMessage.defaultProps = {
  error: undefined,
};

export default ErrorMessage;
