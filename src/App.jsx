import './App.css'
import LandingPage2 from './components/LandingPage2';
import Services from './components/Services';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import 'animate.css';
import Popup from './components/Popup';


const App = () => {
  return (
    <>
      <Popup/>
      <LandingPage2 />
      <Services />
      <Portfolio/>
      <Contact/>
      </>
  );
};

export default App
