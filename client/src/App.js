import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './Components/ApolloProvider';
import Routes from  './Route';

function App() {
  
    return (
      <ApolloProvider client={client}>
        <Routes/>
      </ApolloProvider>
    );
}

export default App;