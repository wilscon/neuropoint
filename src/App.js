import './App.css';
import { Routes, Route } from 'react-router-dom';
import TeamSection from './components/TeamSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Navbar from './components/Navbar';
import NavbarState from './components/NavbarState';
import ContactSection from './components/ContactSection';
import ReviewSection from './components/ReviewSection';
import HomeSection from './components/HomeSection';
import FooterSection from './components/FooterSection';
import ErrorSection from './components/ErrorSection';
import LoginPage from './components/LoginPage';
import SchedulerSection from './components/SchedulerSection';
import { useAuth } from "./lib/useAuth";

function App() {
    const {user,loading} = useAuth();
  return (
    <div>
     
        <Routes>
          <Route path = "/" 
          element = {<div>
                    <Navbar />
                    <HomeSection/>
                    <AboutSection/>
                    <TeamSection/>
                    <ServicesSection/>
                    <ReviewSection/>
                    <ContactSection/>
                    <FooterSection/>
                    </div>}
          />
          <Route path = "/login" element = {<div><NavbarState/><LoginPage/></div>}/>
          <Route path = "/schedule" element = {!loading && user ? <div><NavbarState/><SchedulerSection/></div> : <div><NavbarState/><ErrorSection message="You must log in to view this page." buttonText="Log in" page="/login"/></div>}/>
          <Route path = "*" element = {<div><NavbarState/><ErrorSection message="Oops! The page you're looking for does not exists." buttonText="Home" page="/"/></div>}/>
        </Routes>
    </div>
  );
}

export default App;
