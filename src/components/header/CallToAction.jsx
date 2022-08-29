import React from 'react'
import CV from '../../assets/CV.pdf'

const CallToAction = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>  Telecharger le CV</a>

        <a href="#contact" className='btn btn-primary'>Contactez moi</a>
      </div>
  )
}

export default CallToAction