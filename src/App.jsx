import { useState } from 'react'
import NavBar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Community from './components/card1.jsx'
import Hero3 from './components/hero3.jsx'
import Hero4 from './components/hero4.jsx'
import Hero5 from './components/hero5.jsx'
import Hero6 from './components/hero6.jsx'
import Footer from './components/footer.jsx'
const App = ()=> {

  return (
    <>
      <NavBar/>
     
      <Community/>
      <Hero3/>
      <Hero4/>
      {/* <Hero5/> */}
      <Hero6/>
      <Footer/>

      
      

      
    </>
  )
}

export default App
