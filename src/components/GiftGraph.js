import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';
import { GIFT_STATUS_QUERY } from '../shared/queries';
import { Loading } from '../shared/styledComponents';

const GraphContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props => props.honeymoonSplit}% ${props => props.gymSplit}%;
  grid-gap: 10px;
  align-items: center;
  margin: 10px 0;
`;
const HoneymoonContainer = styled.div`
  min-height: 60px;
  background: var(--primary-lighter);
  color: var(--darkshade);
  border-radius: 0.7rem 0 0 0.7rem;
  padding: 5px;
  display: grid;
  align-items: center;
  justify-items: center;
  text-overflow: ellipsis;
  p {
    margin: 0;
    font-weight: 600;
  }
`;
const GymContainer = styled.div`
  min-height: 60px;
  background: var(--primary-darker);
  color: var(--lightshade-darker);
  border-radius: 0 0.7rem 0.7rem 0;
  padding: 5px;
  display: grid;
  align-items: center;
  justify-items: center;
  text-overflow: ellipsis;
  p {
    margin: 0;
    font-weight: 600;
  }
`;

const GiftGraph = () => {
  return (
    <div>
      <Query query={GIFT_STATUS_QUERY}>
        {({ data, loading, error }) => {
          if (loading) {
            return <Loading />;
          }
          if (error) {
            return <ErrorMessage error={error} />;
          }
          const { gym, honeymoon } = data.giftStatus;
          if (gym + honeymoon === 0) {
            return <p>No gifts given yet.</p>;
          }
          return (
            <GraphContainer honeymoonSplit={honeymoon} gymSplit={gym}>
              <HoneymoonContainer>
                <p>Honeymoon: {honeymoon}%</p>
              </HoneymoonContainer>
              <GymContainer>
                <p>Home Gym: {gym}%</p>
              </GymContainer>
            </GraphContainer>
          );
        }}
      </Query>
    </div>
  );
};

export default GiftGraph;
