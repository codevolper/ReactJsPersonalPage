import * as React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Switchbox from '../switch/switchbox'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  onChecked () {
    this.onCheckedStyle()
  }

  onCheckedStyle () {
    const darkStyle = 'navbar navbar-expand-lg navbar-dark bg-dark'
    const ligthStyle = 'navbar navbar-expand-lg navbar-light bg-light'
    const bodyStyle = document.body.className

    if (bodyStyle === 'light-mode') {
      document.body.className = 'dark-mode'
      document.getElementById('menu-navbar').className = darkStyle
    } else {
      document.body.className = 'light-mode'
      document.getElementById('menu-navbar').className = ligthStyle
    }
  }

  render () {
    return (
      <div>
        <div className='dark-line'>
          <div className='nav-div-vw'>
            <label className='nav-light-label'>Portfolio Example React</label>
          </div>
          <div className='nav-div-vw nav-align-padding-left'>
            <a href='https://github.com/codevolper/ReactJsPersonalPage' target='_blank' rel='noreferrer'>
              <i className='bi bi-github' title='Project in the Github' />
            </a>
            <a href='https://www.linkedin.com/in/leonardovieiradeveloper/' target='_blank' rel='noreferrer'>
              <i className='bi bi-linkedin' title='My linkedin profile' />
            </a>
            <Switchbox onCheckedChange={() => this.onChecked()} />
          </div>
        </div>
        <div>
          <nav id='menu-navbar' className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/home'>Home</Link>
              </li>
              {/* <li className='nav-item active'>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </li> */}
              <li className='nav-item active'>
                <Link className='nav-link' to='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
export default Navbar
