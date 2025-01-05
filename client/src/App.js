import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import UserProvider from './components/UserProvider/UserProvider';
import Sandbox from './components/Sandbox/Sandbox';
import GamesList from './components/GamesList/GamesList';

export function App() {
  const [games, setGames] = useState([]);
  const backendUri = process.env.REACT_APP_BACKEND_URI;

  // useEffect(() => {
  //   const fetchGames = async () => {
  //     try {
  //       const response = await fetch(`${backendUri}/games`);
  //       const data = await response.json();
  //       setGames(data);
  //     } catch (error) {
  //       console.error('Error fetching games:', error);
  //     }
  //   };

  //   fetchGames();
  // }, []);

  return (
    <>
      <UserProvider>
        <Header />
        <Main>
          <h1>Bored? Game!</h1>
          <GamesList />
          <Sandbox />
        </Main>

        <Footer />
      </UserProvider>
    </>
  );
}
