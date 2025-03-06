import './App.css';
import { Routes, Route } from 'react-router-dom';
import TeamSection from './components/TeamSection';
import AboutSection from './components/AboutSection';
import Book from './components/Book';
import ServicesSection from './components/ServicesSection';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import ReviewSection from './components/ReviewSection';
import HomeSection from './components/HomeSection';
import FooterSection from './components/FooterSection';
import ErrorSection from './components/ErrorSection';
import LoginPage from './components/LoginPage';
import SchedulerSection from './components/SchedulerSection';
import DeleteSection from './components/DeleteSection';
import { useAuth } from "./lib/useAuth";
import EditBook from './components/EditBook';

function App() {
    const {user,loading} = useAuth();
  return (
    <div>
     
        <Routes>
          <Route path = "/" 
          element = {<div>
                    <Navbar navItems = {[{name: "home", path: ""}, {name: "about", path: ""}, {name: "team", path: ""},  {name: "services", path: ""}, {name: "reviews", path: ""}, {name: "contact", path: ""}, ...(user ? [{name: "logout", path: "/login"}] : [])]}/>
                    <HomeSection/>
                    <AboutSection/>
                    <TeamSection/>
                    <ServicesSection/> 
                    <ReviewSection/>
                    <ContactSection/>
                    <FooterSection/>
                    </div>}
          />
          <Route path = "/login" element = {<div><Navbar navItems={[{name: "home", path: "/"}, ...(user ? [{name: "logout", path: "/login"}] : [])]}/> <LoginPage/></div>}/>
          <Route path = "/schedule" element = {<div> <Navbar navItems={[{name: "home", path: "/"}, ...(user ? [{name: "logout", path: "/login"}] : [])]}/> <SchedulerSection/> </div>}/>
          <Route path = "/book/:timeId" element = {<div><Navbar navItems={[{name: "home", path: "/"},{name: "schedule", path: "/schedule"}, ...(user ? [{name: "logout", path: "/login"}] : [])]}/><Book/></div>}></Route>
          <Route path = "/editbook/:timeId" element = {<div><Navbar navItems={[{name: "home", path: "/"},{name: "schedule", path: "/schedule"}, ...(user ? [{name: "logout", path: "/login"}] : [])]}/><EditBook/></div>}></Route>
          <Route path = "/cancel/:timeId" element = {<div><Navbar navItems={[{name: "home", path: "/"},{name: "schedule", path: "/schedule"}, ...(user ? [{name: "logout", path: "/login"}] : [])]}/><DeleteSection/></div>}></Route>
          <Route path = "*" element = {<div><Navbar navItems={[{name: "home", path: "/"}, ...(user ? [{name: "logout", path: "/login"}] : [])]}/> <ErrorSection message="Oops! The page you're looking for does not exists." buttonText="Home" page="/"/></div>}/>
        </Routes>
    </div>
  );
}

export default App;
