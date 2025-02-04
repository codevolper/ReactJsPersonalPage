import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import './assets/css/index.scss'
import Navbar from './components/navbar/navbar'
import Home from './pages/Home/home'
import About from './pages/About/about'
import Contact from './pages/Contact/contact'

class App extends React.Component {
  componentDidMount () {
    document.body.className = 'light-mode'
  }

  render () {
    return (
      <div>
        <>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </>
      </div>
    )
  }
}
export default App
