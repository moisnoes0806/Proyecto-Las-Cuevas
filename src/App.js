import video from './assets/video.mp4';
import './App.css';
import Header from './components/header.js'
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="hero">

            <video autoPlay muted loop playsInline className="back-video">
                <source src={video} type="video/mp4" />
            </video>
            <Header />
            <Outlet/>

        </div>
    );
}

export default App;
