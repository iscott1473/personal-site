import React from 'react'
import '../styles/app.css'

export default () => {
  const navHider = () => {
    let nav = document.getElementsByClassName('header')[0]
    nav.classList.contains('hide') ? nav.classList.remove('hide') : nav.classList.add('hide')
  }
  return(
    <div className = 'settingsIcon secondary-font' onClick = {navHider}>
      ≡
    </div>
  )
}