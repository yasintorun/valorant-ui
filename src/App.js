import './App.css';
import HomeMovies from './assets/movies/HomeScreen2.mp4';
import ChatSidebar from './components/ChatSidebar';
import MainHeader from './components/headers/MainHeader';
import styled from 'styled-components'
import CharacterListPage from './pages/CharacterListPage';

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`


function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="myVideo">
        <source src={HomeMovies} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <MainHeader />
      <Content>
        <ChatSidebar />
        <CharacterListPage />
      </Content>
    </div>
  );
}

export default App;
