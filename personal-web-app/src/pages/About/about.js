import React, { Fragment } from 'react'
import '../../assets/css/index.scss'

class About extends React.Component {
  render () {
    return (
      <>
        <div className='main'>
          <h2>About the page</h2>
          <p>
          This page was created using React.JS to demonstrate some front-end concepts. <br />
          It serves as a programming example for a technical interview, showcasing a simple structure with this technology.
          </p>
          <p>
            Of course that exists others methods and ways to approach front-end desing, 
            but the idea here was to demostrate some technical knowledge
            with React.JS, Css and Javascript.
          </p>
          <p>
            I used some libs, but I tried to create the components and style using
            "pure" css and Javascript, just to provide an example. <br />
            I used classes instead of functions. 
            Another thing I considered important was used a pure component.
          </p>
          <p>
            Visit my <a href='https://www.linkedin.com/in/leonardovieiradeveloper/'>LinkedIn profile</a> to see my 
            professional experience and learn how I can complement your team in delivering projects. <br />
            I'm available for remote work and I'm looking for new challenges.<br />
            Thanks for visiting my page.
          </p>         
          <p className='singature'>
            Leonardo Vieira
          </p>
        </div>
      </>
    )
  }
}

export default About