import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>get in</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>fabrice-pivert@hotmail.fr</h5>
            <a href="mailto:fabrice-pivert@outlook.fr">Envoyer un message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Linkedin</h4>
            <h5>Fabrice Pivert</h5>
            <a href="https://fr.linkedin.com/in/fabrice-pivert">Envoyer un message</a>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>fabrice-pivert@hotmail.fr</h5>
            <a href="mailto:fabrice-pivert@outlook.fr">Envoyer un message</a>
          </article>
        </div>
        {}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact