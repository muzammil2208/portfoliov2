import React from 'react'
import Moon from './Icons/Moon'
import Sun from './Icons/Sun'

function ModeButton() {
  return (
    <div class="modebutton_container">
      <Sun/>
      <button class="modebutton_background"><div class="toggle"></div></button>
      <Moon/>

    </div>
    
  )
}

export default ModeButton