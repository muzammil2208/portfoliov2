import React from 'react'
import Moon from './Icons/Moon'
import Sun from './Icons/Sun'
import { useState } from 'react';

function ModeButton() {
  const [style,setStyle]=useState('modebutton_background light-btn');
  const changeStyle=()=>{
    if(style==='modebutton_background light-btn')
    {
      setStyle('modebutton_background dark-btn')
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
    else
    {
      setStyle('modebutton_background light-btn')
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
     
  }
  return (
    <div className="modebutton_container">
      <Sun/>
      <button className={style}  onClick={changeStyle}><div class="toggle"></div></button>
      <Moon/>

    </div>
    
  )
}

export default ModeButton