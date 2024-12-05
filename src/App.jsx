import './App.css'
import LandingPage2 from './components/LandingPage2';
import Navbar from './components/navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import 'animate.css';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Carousel from './components/Carousel';


const App = () => {
  return (
    <>
      <Navbar />
      <Popup/>
      <LandingPage2 />
      <Services />
      <Portfolio/>
      <Contact/>
      <Footer/>
      </>
  );
};

export default App
