import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolder} from 'react-icons/vsc'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>

      <h5>En savoir plus </h5>
      <h2>A propos de moi</h2>
      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
      </div>
    <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
          <FaAward className='about__icon' />
          <h5>Experience</h5>
          <small>1 ans</small>
        </article>
        <article className="about__card">
          <FiUsers className='about__icon' />
          <h5>Clients</h5>
          <small>+2000</small>
        </article>

        <article className="about__card">
          <VscFolder className='about__icon' />
          <h5>Experience</h5>
          <small>1 ans</small>
        </article>
    </div>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Dolorum perferendis harum dolorem illum, aliquam culpa 
       quod itaque ratione quae, minima modi architecto sequi 
       aliquid nam aut repudiandae sunt pariatur eius?
    </p>
    <a href="#contact" className='btn btn-primary'> Contactez moi</a>
    </div>
    </div> 
    </section>
  )
}

export default About