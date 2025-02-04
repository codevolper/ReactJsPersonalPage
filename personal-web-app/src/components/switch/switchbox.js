import * as React from 'react'
import './switchbox.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

class Switchbox extends React.Component {
  onToggle () {
    const input = document.getElementById('switchkbox')

    if (input.className === 'bi bi-toggle-off') {
      input.classList.remove('bi-toggle-off')
      input.classList.add('bi-toggle-on')
      input.checked = true
    } else {
      input.classList.remove('bi-toggle-on')
      input.classList.add('bi-toggle-off')
      input.checked = false
    }
  }

  render () {
    return (
      <div className='toggle-content' onClick={() => this.props.onCheckedChange()}>
        <i
          id='switchkbox'
          className='bi bi-toggle-off'
          onClick={this.onToggle}
          title='Change the background style'
        />
      </div>
    )
  }
}

export default Switchbox
