import './App.css'
import LandingPage from './components/LandingPage';
import Navbar from './components/navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import 'animate.css';
const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <LandingPage />
      <Services />
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default App
