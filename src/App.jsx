import { useState } from 'react'
import './css/App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import JSLogo from './assets/js-logo.webp'
import Particle from './components/Particle'

function App() {

  const [burger, setBurger] = useState(true)

  function openMenu() {
    setBurger(!burger)
  }

  function handleNavClick() {
    setBurger(true)
  }

  return (
    <>
    <div id='particle-wrapper'><Particle /></div>
    <nav id='navbar'>
      <div className='navbar-logo'><NavLink to="/"><img src={JSLogo}/></NavLink></div>
      <ul className={`navbar-wrapper ${burger ? `` : `nav-active`}`}>
        <li className='navbar-item' onClick={handleNavClick}><NavLink to="/">Home</NavLink></li>
        <li className='navbar-item' onClick={handleNavClick}><NavLink to="/projects">Projects</NavLink></li>
        <li className='navbar-item' onClick={handleNavClick}><NavLink to="/about">About</NavLink></li>
      </ul>
      <div id='burger-wrapper' onClick={openMenu}><i className={burger ? "fas fa-bars" : "fas fa-times"}></i></div>
    </nav>
      <main id='main-wrapper'>
        <Routes history={history}>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </main>
    <footer id="footer" className="f-jc-ac"><p>© {new Date().getFullYear()} Jordan</p></footer>
    </>
  )
}

export default App
