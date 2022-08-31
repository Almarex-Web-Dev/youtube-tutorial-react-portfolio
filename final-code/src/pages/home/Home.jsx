import React from 'react'
// components
import { Header, Blogs } from '../../components'
// pages
import { Contact, About, ProjectPage } from '../../pages'

const Home = () => {
  return (
    <>
      <Header />
      <section className="section-about">
        <About />
      </section>
      <ProjectPage />
      <Blogs />
      <Contact />
    </>
  )
}

export default Home
