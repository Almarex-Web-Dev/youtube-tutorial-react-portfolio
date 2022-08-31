import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false)
  const [blog, setBlogs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setBlogs(data)
      setLoading(false)
    }
    fetchData()
  }, [url])

  return { loading, blog, setLoading }
}

