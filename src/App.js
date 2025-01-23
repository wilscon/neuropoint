import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TeamSection from './components/TeamSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import ReviewSection from './components/ReviewSection';
import HomeSection from './components/HomeSection';
import FooterSection from './components/FooterSection';
import ErrorSection from './components/ErrorSection';



function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path = "/" 
          element = {<div>
                    <HomeSection/>
                    <AboutSection/>
                    <TeamSection/>
                    <ServicesSection/>
                    <ReviewSection/>
                    <ContactSection/>
                    <FooterSection/>
                    </div>}
          />
          <Route path = "/login" element = {<div><LoginPage/></div>}/>
          <Route path = "*" element = {<div><ErrorSection/></div>}/>
        </Routes>
    </div>
  );
}

export default App;
