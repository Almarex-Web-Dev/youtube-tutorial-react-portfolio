import React from 'react'
import './singlepost.scss'

const SinglePost = React.memo((props) => {
  const { title, brief, coverImage, url } = props
  return (
    <>
      <article className="section__article">
        <img src={coverImage} alt="" />
        <div className="article__styles switch__color">
          <h2>{title}</h2>
          <p>{brief.substring(0, 150)}</p>
          <a className="switch__color" href={url}>
            Read more
          </a>
        </div>
      </article>
    </>
  )
})

export default SinglePost
