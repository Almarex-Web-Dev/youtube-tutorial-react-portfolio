import React, { useEffect, useState } from 'react'
import { SinglePost } from '../../components'
import Fade from 'react-reveal/Fade'
import { blogData } from '../../data/blogData'

import './blogpage.scss'

const Blog = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    setBlog(blogData)
  }, [])

  return (
    <>
      <Fade>
        <section className="section__blogpage section__padding">
          <div className="section__blogpage-wrapper">
            {blog.map((postsItems, index) => {
              return <SinglePost key={index} {...postsItems} />
            })}
          </div>
        </section>
      </Fade>
    </>
  )
}
export default Blog
