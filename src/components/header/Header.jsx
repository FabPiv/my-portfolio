import React from 'react'
import './header.css'
import CallToAction from './CallToAction'
import me from '../../assets/me.png'
import ReseauxSocials from './ReseauxSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Fabrice Pivert</h1>
        <h5 className="text-light">Fullstack developper</h5>          
        <CallToAction />

      
      <div className="me">
        <img src={me} style={{
          
            width: 250,
            height: 300
            
          }} px alt="me" />
                      </div>
                      
          <a href="#contact" className='scroll__down'> Scroll down</a>
          <ReseauxSocials />
      </div>
      
    </header>
  )
}

export default Header