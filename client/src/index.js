import { createRoot } from 'react-dom/client';
import { App } from './App';
import './global-styles.css';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // Your GraphQL endpoint
  cache: new InMemoryCache(),
});
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
