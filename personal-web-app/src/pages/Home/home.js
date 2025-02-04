import React, { Component, Fragment } from 'react'
import './home.scss'
import Input from '../../components/input/input'
import InputType from '../../components/input/inputEnumTypes'
import Card from '../../components/card/card'

class Home extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      text: ''
    };
  }

  handleNameCardChange(component) {
    this.setState({ text : document.getElementById(component).value});
  }

  render () {
    return (
      <>
        <div className='main'>
          <h2>Component examples</h2>
          <p>Personal Information</p>
          <div className='form-table'>
            <div className='form-row'>
              <div className='form-column'>
                <div className='form-table'>
                  <div className='form-row'>
                    <div className='form-column'>
                      <Input
                        id='txtName'
                        validate
                        type={InputType.Text}
                        placeholder='Name'
                        width='large-size'
                        className='form-control'
                        OnchangeText={() => this.handleNameCardChange('txtName')}                        
                        title="Insert your name"
                      >
                      </Input>
                    </div>                   
                  </div> 
                  <div className='form-row'>
                    <div className='form-column'>
                      <Input 
                        id='txtEmail' 
                        validate type={InputType.Email} 
                        placeholder='Email' 
                        width='large-size' 
                        title="Insert your e-mail" 
                        OnchangeText={() => this.value }/>
                    </div>                   
                  </div>
                  <div className='form-row'>
                    <div className='form-column'>
                      <Input 
                        id='txtPassword' 
                        validate type={InputType.Password} 
                        placeholder='Password' 
                        width='large-size' 
                        OnchangeText={() => this.value}/>
                    </div>                   
                  </div>
                </div>
              </div>
              <div className='form-column'>
                <div className='form-table'>
                  <div>
                    <Card clientName={this.state.text}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
