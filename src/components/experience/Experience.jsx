import React from 'react'
import './experience.css'
import {BsCheckCircleFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id='experience' >

      <h5>Mes skils</h5>
      <h2>Mon experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
                <h4>HTML</h4>
              <small className='text-light'>Avancé</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
              <h4>Vue.js</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
              <h4>Nuxt.js</h4>
              <small className='text-light'>Intermediaire</small>
              </div>
            </article>
          </div>
          




        </div>
        <div className="experience__backend">
        <h3>Backend </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
                <h4>PHP</h4>
              <small className='text-light'>Avancé</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Avancé</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill />
              <div>
                <h4>Symfony</h4>
                <small className='text-light'>Intermediaire</small>
              </div>
            </article>
            
            
          </div>
          
        </div>

        </div>
      
      
      
    
    </section>
  )
}

export default experience