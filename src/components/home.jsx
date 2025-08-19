import NavBar from './navbar'
import Hero3 from './hero3.jsx'
import Hero6 from './hero6.jsx'
import Footer from './footer'
import Hero4 from './hero4.jsx'
import ScrollTop from './scroll_top.jsx'
import ScrollTriggered from './card2.jsx'
import Card3 from './card3.jsx'
import Testimonials from './testimonial.jsx'

const Home = ()=> {

  return (
    <>
      <NavBar/>
      <ScrollTriggered/>
      <Hero3/>
      <Card3/>
      <Hero6/>
      <Testimonials/>
      <Footer/>
      <ScrollTop/>    
    </>
  )
}

export default Home
