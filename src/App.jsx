import './App.css'
import LandingPage from './components/LandingPage';
import LandingPage2 from './components/LandingPage2';
import Navbar from './components/navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import 'animate.css';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <LandingPage2 />
      <Services />
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App
