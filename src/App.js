import './App.css';
import TeamSection from './components/TeamSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import ReviewSection from './components/ReviewSection';
import HomeSection from './components/HomeSection';
import FooterSection from './components/FooterSection';



function App() {
  return (
    <div>
      <Navbar />
      <HomeSection />
       <AboutSection/> 
       <TeamSection/>
       
       <ServicesSection/>
       
       <ReviewSection/>
       <ContactSection/>
       <FooterSection/>
        
      
    </div>
  );
}




export default App;
