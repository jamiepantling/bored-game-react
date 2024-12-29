import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import UserProvider from './components/UserProvider/UserProvider';

export function App() {
  return (
    <>
      <UserProvider>
        <Header></Header>
        <Main>
          <h1>Hello world!</h1>
        </Main>
        <Footer></Footer>
      </UserProvider>
    </>
  );
}
