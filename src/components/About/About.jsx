import React from 'react'
import './About.css'
import ME from '../../assets/IMG_7296.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUserTie } from 'react-icons/fa'
import { FaRegFolderOpen } from 'react-icons/fa'
import { motion } from 'framer-motion'

function About() {
  return (
    <section id='about'>
      <h5>Get To Know About Me</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <motion.div
          className='about_me'
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <div className='about_me-image'>
            <img src={ME} alt='' />
          </div>
        </motion.div>

        <motion.div
          className='about_content'
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <div className='about_cards '>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>
            </article>

            <article className='about_card'>
              <FaUserTie className='about_icon' />
              <h5>Employer</h5>
              <small>3+ Employer</small>
            </article>

            <article className='about_card'>
              <FaRegFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am <strong>A Mentor </strong> and a{' '}
            <strong>Software Developer </strong> with about 4 years of
            experience, specialized in Nodejs, React and NextJs. I have
            extensive expertise as a backend developer designing and creating
            websites that conform to web accessibility standards. I've worked on
            projects that required adherence to accessibility standards and
            security management.
            <br /> <br />
            I am skilled in building responsive designs that work across
            different devices and platforms. I am passionate about optimizing
            website performance and ensuring web accessibility and SEO best
            practices are met. I am a capable and consistent problem-solver,
            skilled at prioritizing. I have built excellent web applications
            with Javascript, Typescript, React and NextJs ranging from I.T,
            Insurance, Fintech sectors.
            <br /> <br />
            In addition to technical skills, I have experience working closely
            with UX/UI designers to ensure that designs are accessible and
            inclusive. Just send a{' '}
            <span className='anchor_message'>
              <a href='#contact'>Click To Message</a>
            </span>
            . Solving problems with tech excites me. I am open to working with
            you.
          </p>

          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
