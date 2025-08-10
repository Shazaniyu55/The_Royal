import { useState } from 'react'
import NavBar from './navbar'
import Community from './card1'
import Hero3 from './hero3.jsx'
import Hero6 from './hero6.jsx'
import Footer from './footer'
import Hero4 from './hero4.jsx'
import ScrollTop from './scroll_top.jsx'
import ScrollTriggered from './card2.jsx'


const Home = ()=> {

  return (
    <>
      <NavBar/>
      <ScrollTriggered/>
     
     
      <Hero3/>
     <Hero4/>
      
      <Hero6/>
      <Footer/>
      <ScrollTop/>

    
      

      
    </>
  )
}

export default Home
