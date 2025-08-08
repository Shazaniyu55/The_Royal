
import { Routes, Route, Link } from 'react-router-dom';
import LegalInfo from './components/policy.jsx'
import Home from './components/home.jsx';
const App = ()=> {

  return (
    <>
      

       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/policy" element={<LegalInfo/>} />
      </Routes>
      

      
    </>
  )
}

export default App
