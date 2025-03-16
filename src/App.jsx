
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import './components/Navbar.css'
import Projects from "./components/Projects"

import Technologies from "./components/Technologies"


const App = () => {
  return (
    <div className="pverflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
    
    <div className="container mx-auto px-8">
      <Navbar/>
      <Hero/>
      <Technologies/>
      <Projects />
      <Experience />
      <Contact/>
    </div>
      
    </div>
  )
}

export default App
