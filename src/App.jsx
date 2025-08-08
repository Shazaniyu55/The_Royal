
import { Routes, Route, Link } from 'react-router-dom';
import LegalInfo from './components/policy.jsx'
import Home from './components/home.jsx';
import Contact from './components/contact.jsx';
import HomeTeam from './components/team.jsx';
import AuthPage from './components/login.jsx';
const App = ()=> {

  return (
    <>
      

       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/team" element={<HomeTeam/>} />
        <Route path="/login" element={<AuthPage/>} />
        <Route path="/policy" element={<LegalInfo/>} />
      </Routes>
      

      
    </>
  )
}

export default App
