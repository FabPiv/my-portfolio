import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const ReseauxSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"  rel="noreferrer"><BsLinkedin/> </a>
        <a href="https://github.com/FabPiv" target="_blank"  rel="noreferrer"><BsGithub/></a>
    </div>
  )
}

export default ReseauxSocials