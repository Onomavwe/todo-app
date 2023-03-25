import React from 'react'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer__field'>You have 4 pending tasks</div>
        <div className='footer__button'>Clear All</div>
    </div>
  )
}
