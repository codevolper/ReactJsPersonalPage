import React, { Component } from 'react'
import './card.css'
import chipImage from './chip.png'

class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clientName: this.props.clientName
    }
  }

  render () {
    return (
      <section>
        <div className='card'>
          <div className='face front'>
            <h3 className='debit'>Credit Card</h3>
            <h3 className='bank'>Bank</h3>
            <img className='chip' src={chipImage} alt='chip' />
            <h3 className='number'>4124 0541 8040 7884</h3>
            <h5 className='valid'><span>Validate</span><span>10/28</span></h5>
            <h5 className='card-holder'>{ this.props.clientName }</h5>
          </div>
          <div className='face back'>
            <div className='blackbar' />
            <div className='cvvtext'>
              <div className='white-bar' />
              <div className='cvv'>123</div>
            </div>
            <p className='text'>
                This is an example to show a simply web app in react in my Portfolio on https://www.linkedin.com/in/leonardovieiradeveloper/</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Card
