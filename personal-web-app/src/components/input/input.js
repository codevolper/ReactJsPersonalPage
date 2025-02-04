import React, { Component } from 'react'
import './input.css'
import './input-mask'

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      validate: this.props.validate,
      placeholder: this.props.placeholder,
      type: this.props.type,
      width: this.props.width,
      value: this.props.value
    }
  }

  componentDidMount () {
    this.onConfigureComponent()
  }

  render () {
    return (
      <div className='div'>
        <input
          id={this.state.id}
          type={this.props.type}
          width={this.props.width}
          onBlur={() => this.onBlur(this.state.id, this.state.validate)}
          //onChange={() => this.onChangeText(this.props.value)}
          onChange={() => this.props.OnchangeText(this.state.id)}
          value={this.props.value}
          required
          title={this.props.title}
          data-bs-toggle="tooltip"
        />
        <span className='placeholder-label'>{this.props.placeholder}</span>
      </div>
    )
  }

  onBlur (id, isValidate) {
    if (isValidate) {
      const textBox = document.getElementById(id)

      if (textBox.value === ''){
        textBox.classList.add('error-empty')
      } 
      else{
        textBox.classList.remove('error-empty')
      }
    }
  }

  onConfigureComponent () {
    const textBox = document.getElementById(this.props.id)
    textBox.classList.add(this.props.width)
  }

  // onChangeText(content){
  //   console.log('onChangeText');
  //   console.log(content);
  // }
}
export default Input
