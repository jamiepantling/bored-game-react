import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import UserProvider from './components/UserProvider/UserProvider';

export function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5001/games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <>
      <UserProvider>
        <Header />
        <Main>
          <h1>Hello world!</h1>
          <ul>
            {games.map((game) => (
              <li key={game._id}>{game.title}</li>
            ))}
          </ul>
        </Main>
        <Footer />
      </UserProvider>
    </>
  );
}
