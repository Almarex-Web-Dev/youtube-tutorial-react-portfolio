import React, { useState, useEffect } from 'react'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

import { blogData } from '../../data/blogData'

import './blogs.scss'
const Blogs = () => {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    setBlog(blogData)
  }, [])
  
  return (
    <section
      aria-label="blog section"
      className="section-blog blog-home-section section__padding"
    >
      <div aria-label="blog header" className="blog-header">
        <p className="blog-heading">Latest News</p>
        <h2 aria-label="my latest article">My Latest Articles</h2>
        <p className="blog__description">
          Do you love blogging about your experiences ? well, I do and here are
          some fascinating articles I have written so far based on the
          techonlogies that I found useful. Check it out and Happy Reading !
        </p>
        <span></span>
      </div>

      <Reveal left>
        <div className="fake-big">Blog</div>
      </Reveal>

      <div className="blog-wrapper blog-home-wrapper">
        {blog.slice(0, 6).map((blogsPost) => {
          const { _id, title, brief, url } = blogsPost
          return (
            <Fade bottom key={_id}>
              <article className="article-section-home">
                <div className="article-description">
                  <a href={url}>
                    <h2 aria-label={title}>{title}</h2>
                  </a>
                  <p>{brief.substring(0, 150)}...</p>
                  <a className="switch__color" href={url}>
                    Read more
                  </a>
                </div>
              </article>
            </Fade>
          )
        })}
      </div>
    </section>
  )
}

export default Blogs
