import './App.css';
import HomeMovies from './assets/movies/HomeScreen2.mp4';
import MainHeader from './components/headers/MainHeader';

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="myVideo">
        <source src={HomeMovies} type="video/mp4" />
          Your browser does not support HTML5 video.
      </video>
      <MainHeader />
    </div>
  );
}

export default App;
