import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:1200/graphql',
  cache: new InMemoryCache()
});