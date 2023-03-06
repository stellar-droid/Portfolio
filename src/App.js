//import logo from './logo.svg';
import './App.css'
 import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/experience/Experience';
import Works from './Components/Works/Works';
import Portfolio from './Components/Portfolio/Portfolio';
import Testimonials from './Components/Testimonials/Testimonials';
import Contacts from './Contacts/Contacts';
import Footer from './Components/Footer/Footer';

function App() {
  return (
         <div className="App">
          <Navbar/>
          <Intro/>
          <Services/>
          <Experience/>
          <Works/>
          <Portfolio/>
          <Testimonials/>
          <Contacts/>
          <Footer/>
         </div>     
  );
}

export default App;
