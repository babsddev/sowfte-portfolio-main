import React from 'react'
import './Portfolio.css'
import IMG0 from '../../assets/IMG0.png'
import IMG1 from '../../assets/airtime.png'
import IMG2 from '../../assets/ecom.png'
import IMG3 from '../../assets/movies.png'
import IMG10 from '../../assets/IMG-10.png'
import IMG4 from '../../assets/youtube.png'
import IMG5 from '../../assets/school.png'
import IMG6 from '../../assets/meal-order.png'

const data = [
  {
    id: 1,
    image: IMG0,
    title: 'CargoLand Global',
    desc: `Say goodbye to shipping headaches with our top-notch courier services. Cargo Land offer fast, reliable delivery options for businesses of all sizes.\n In order to create an order for the shipment of goods at your convenience and also track order and create tickets, Cargo Land provides you this platform, you must first initiate the process from the platform by registering.`,
    github: 'https://github.com/babsddev',
    demo: 'https://cargolandglobal.com/',
  },
  {
    id: 1,
    image: IMG1,
    title: 'Airtime-to-cash App',
    desc: 'The Airtime to Cash app allows users to sell their airtime for cash. It features a wallet, which holds the funds users receive in return for sold airtime and allows for withdrawal of those funds into the user’s designated bank account.',
    github: 'https://github.com/babsddev',
    demo: 'https://airtimetocashpodg.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'An  E-commerce App',
    desc: 'A responsive e-commerce application built with react and stripe for product checkout.',
    github: 'https://github.com/babsddev',
    demo: 'http://nurez-store.netlify.app',
  },

  {
    id: 3,
    image: IMG6,
    title: 'A Meal order App',
    desc: 'A full-stack responsive application for ordering Nigerian foods. The client-side was built with ReactJs, and the server side was built with Nodejs, Express, and MongoDB for the database.',
    github: 'https://github.com/babsddev',
    demo: 'https://fastordermeal.netlify.app/',
  },

  {
    id: 4,
    image: IMG10,
    title: 'A Chef App',
    desc: 'Modern UI/UX website using Next.js & Tailwind CSS',
    github: 'https://github.com/babsddev',
    demo: 'https://chef-joy.vercel.app/',
  },
  {
    id: 5,
    image: IMG3,
    title: 'A Movie App',
    desc: 'This is a basic Movie Search Application where you can search for any movie of your choice. You pass in a keyword in the search bar and movies related to your keyword will be displayed.',
    github: 'https://github.com/babsddev',
    demo: 'https://moviestarapp.netlify.app/',
  },
  {
    id: 6,
    image: IMG4,
    title: 'Youtube Clone App',
    desc: 'A fully responsive youtube clone app built with React, Materia-Ui and Rapid-Api.',
    github: 'https://github.com/babsddev',
    demo: 'http://nurez-youtube.netlify.app',
  },
  {
    id: 7,
    image: IMG5,
    title: 'Multipage school website',
    desc: 'A complete responsive multi-page education/school website built with HTML, CSS, and javascript.',
    github: 'https://github.com/babsddev',
    demo: 'http://checkitoutnow.netlify.app',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {data.map(({ id, image, title, desc, github, demo }) => {
          return (
            <article key={id} className='portfolio_item'>
              <div className='portfolio_item-img'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
              <div className='portfolio_item-cta'>
                <a href={github} className='btn' target='_blank '>
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='_blank '>
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
