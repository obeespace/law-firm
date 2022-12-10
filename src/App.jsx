import Header from "./Components/Header"
import {Routes, Route, useNavigate} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import TermsOfEngage from "./Pages/TermsOfEngage";
import Contact from "./Pages/Contact";

function App() {

  return (
    <div className="App font-merriweather">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
