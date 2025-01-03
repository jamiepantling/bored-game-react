import React, { useEffect } from 'react';
import { ApolloSandbox } from '@apollo/sandbox';

const Sandbox = () => {
  useEffect(() => {
    // Create a new Apollo Sandbox instance
    new ApolloSandbox({
      initialEndpoint: 'http://localhost:5000/graphql', // Your GraphQL endpoint
      target: '#sandbox-container', // Target DOM element
      initialState: {
        headers: {
          // Add any required headers here
        },
      },
    });
  }, []);

  return (
    <div>
      {/* Target container for the Apollo Sandbox */}
      <div
        id="sandbox-container"
        style={{ height: '100vh', width: '100%' }}
      ></div>
    </div>
  );
};

export default Sandbox;
