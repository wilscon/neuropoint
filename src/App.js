import './App.css';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Navbar from './components/Navbar';
import ProfileSection from './components/ProfileSection'; // Use the new component
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';



function App() {
  return (
    <div>
      <Navbar />
      <ProfileSection />
      <div className="pt-16"> {/* Add padding to prevent content from being hidden behind navbar */}
       <AboutSection/> 
       <ServicesSection/>
       <ContactSection/>
       <TestimonialsSection/>
        
      </div>
    </div>
  );
}




export default App;
