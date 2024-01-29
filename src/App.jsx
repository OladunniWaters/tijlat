import { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import AboutUs from './components/aboutus/AboutUs';
import ContactUs from './components/contactus/ContactUs';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import WhyUs from './components/whyus/WhyUs';
import WorkHour from './components/workhour/WorkHour';
import Horianima from './components/horianima/Horianima';
import Testimonials from './components/testimonials/Testimonials';


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
        <Horianima />
        <Gallery />
        <AboutUs />
        <WhyUs />
        <ContactUs />
        <WorkHour />
        <Testimonials />
        <Footer />
      </div>
      </div>
  )
}

export default App
