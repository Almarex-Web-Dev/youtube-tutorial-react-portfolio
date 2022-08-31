import React, { useState, useEffect, useCallback } from 'react'
import SingleGame from '../../components/singleGame/SingleGame'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BiSearch } from 'react-icons/bi'

import CircleLoader from 'react-spinners/CircleLoader'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import asphalt from '../../assets/images/asphalt.jpg'
import sniper from '../../assets/images/sniper.jpg'
import maxresdefault from '../../assets/images/maxresdefault.jpg'
import mario from '../../assets/images/mario.jpg'
import pes5 from '../../assets/images/pes5.jpeg'

import { useFetch } from '../../hooks/useFetch'
import './gaming.scss'
const url1 = `https://api.rawg.io/api/games?key=b432c428c59c4092a25f1d4638721dae&search_exact=true`

const Gaming = React.memo(() => {
  const { loading, setLoading } = useFetch(url1)
  const [games, setGames] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchGames = useCallback(
    async (title) => {
      try {
        setLoading(true)
        const response = await fetch(`${url1}&search=${title}`)
        if (!response.ok) {
          let msg = `There was a problem while fetching the data
         ${response.statusText} ${response.status}`
          throw new Error(msg)
        } else {
          const data = await response.json()
          setGames(data.results[2].tags)
          setLoading(false)
        }
      } catch (error) {
        console.log(error.message)
      }
    },
    [setLoading],
  )

  useEffect(() => {
    fetchGames()
  }, [fetchGames])

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm('')
  }

  return (
    <>
      <section className="game-section">
        <form onSubmit={handleSubmit} className="search-item">
          <div className="input-group">
            <input
              type="text"
              className="input-search"
              value={searchTerm}
              placeholder=" e.g action, Sniper, football etc."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="search-icon switch__color"
              type="submit"
              onClick={() => fetchGames(searchTerm)}
            >
              <BiSearch />
            </button>
          </div>
        </form>
        <div className="game-section-wrapper">
          <div className="hero-section">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay
            >
              <SwiperSlide>
                <img src={sniper} alt="heroImage" />
                <h2>Action Games</h2>
              </SwiperSlide>
              <SwiperSlide>
                <img src={pes5} alt="heroImage" />
                <h2>PES 5</h2>
              </SwiperSlide>
              <SwiperSlide>
                <img src={asphalt} alt="heroImage" />
                <h2>Car Racing</h2>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img src={maxresdefault} alt="heroImage" />
                  <h2>FIFA 2023</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img src={mario} alt="heroImage" />
                <h1>Super Mario</h1>
              </SwiperSlide>
            </Swiper>
          </div>
          <p>
            The action game is a genre that includes fights, puzzles, and
            strategies emphasizing coordination and reaction. It includes a
            large variety of sub-genres like fighting, beat 'em ups, shooters,
          </p>
          {loading ? (
            <div className="loading-circle">
              <CircleLoader loading={loading} className="circle" size={50} />
            </div>
          ) : (
            <div className="game-wrapper">
              {games.map((myGames, index) => {
                return <SingleGame key={index} {...myGames} />
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
})

export default Gaming
