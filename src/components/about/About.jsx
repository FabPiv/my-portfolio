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
          <h5>Étudiant</h5>
          <small> <a href="https://www.hetic.net/formations/bachelor-web" target="_blank">Hétic</a> </small>
        </article>

        <article className="about__card">
          <VscFolder className='about__icon' />
          <h5>Projets</h5>
          <small>+ de 5 projets</small><br />
          <small><a href="https://github.com/FabPiv">Repo Github</a></small>
        </article>
    </div>

    <p>
    Je suis actuellement en 2eme année de Bachelor développement web à 
    Hétic, école spécialisée dans la tech située à Montreuil et 
    je recherche une alternance qui débuterait en septembre pour 
    une durée de 2 ans. <br />
    <br />
Durant ma première année nous avons eu une pédagogie basée 
sur l’apprentissage par les projets en équipe sur différents
 langages tel que PHP/MySQL, Python, Javascript, Html, CSS 
 cela m’a permis d’acquérir des solides connaissances 
 techniques mais aussi de développer ma capacité à travailler 
 en équipe, de recherches d’informations et mon goût pour la résolution 
de problèmes le tout allié à une approche autodidacte.
    </p>
    <a href="#contact" className='btn btn-primary'> Contactez moi</a>
    </div>
    </div> 
    </section>
  )
}

export default About