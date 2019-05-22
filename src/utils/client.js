import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';
import { backendUrl } from '../../config';

export default new ApolloClient({
  uri: backendUrl,
  credentials: 'include',
  fetch,
});
