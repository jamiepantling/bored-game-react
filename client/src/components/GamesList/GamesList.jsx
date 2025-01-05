import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_GAMES } from '../../queries'; // Import the query

const GamesList = () => {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.games.map((game) => (
        <div key={game.id}>
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          {game.tags && (
            <ul>
              {game.tags.map((tag, index) => (
                <li key={index}>{tag.name}</li>
              ))}
            </ul>
          )}
          {game.picture && (
            <img src={game.picture} alt={game.title} />
          )}
        </div>
      ))}
    </div>
  );
};

export default GamesList;
