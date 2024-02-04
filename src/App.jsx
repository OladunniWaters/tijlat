import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import AboutUs from './components/aboutus/AboutUs';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import WhyUs from './components/whyus/WhyUs';
//import Horianima from './components/horianima/Horianima';


function App() {
    const [theme, setTheme] = useState("dark")
    const changeTheme = () =>{
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  

  return (
      <div className="app" data-theme={theme}>
       <Navbar changeTheme={changeTheme}/>
       <div>
        <Hero />
        <Gallery />
        <AboutUs />
        <WhyUs />
        <ContactUs />
        <Footer />
      </div>
      </div>
  )
}

export default App
