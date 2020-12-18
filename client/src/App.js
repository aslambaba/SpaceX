import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './Components/ApolloProvider';
import MainPage from './Mainpage';

function App() {
  
    return (
      <ApolloProvider client={client}>
        <MainPage />
      </ApolloProvider>
    );
}

export default App;