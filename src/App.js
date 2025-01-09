import './App.css';
import TeamSection from './components/TeamSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import ReviewSection from './components/ReviewSection';
import HomeSection from './components/HomeSection';



function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <div className="pt-16"> {/* Add padding to prevent content from being hidden behind navbar */}
       <AboutSection/> 
       <TeamSection/>
       
       <ServicesSection/>
       
       <ReviewSection/>
       <ContactSection/>
        
      </div>
    </div>
  );
}




export default App;
