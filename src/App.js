import video from './assets/video.mp4';
import './App.css';

function App() {
  return (
    <div className="hero">

        <video autoplay loop muted plays-inline className="back-video">
            <source src={video} type="video/mp4" />
        </video>

        <nav>
            <ul>
                <li> <a href="#">INICIO</a> </li>
                <li> <a href="#">GARRAFONES</a> </li>
                <li> <a href="#">CONTACTO</a> </li>
                <li> <a href="#">SOCIAL</a> </li>
            </ul>
        </nav>
        <div className="content">
            <h1>LasCuevas</h1>
            <a href="#">BUSCAR</a>
        </div>
    </div>
  );
}

export default App;
