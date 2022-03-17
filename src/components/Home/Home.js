import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'

import styles from './Home.module.scss'

export const Home = () => {
  const [films, setFilms] = useState([])
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/films`)
      .then(res => setFilms(res.data.results))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={styles['home-wrap']}>
      {films.length  ? (
        <div className={styles['movie-container']}>
          {films.map((film,idx) => (
            <Link key={film.episode_id} to={`/movie/${idx+1}`} className={styles['movie-card']}>
              <h2>
                {film.title}
              </h2>
              <h5>
                Release Date : {film.release_date}
              </h5>
              <h5>
                Director : {film.director}
              </h5>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles['loading-background']}>
          <ReactLoading height={'15%'} width={'15%'} type="spin" color="#fff"/>
        </div>
      )

      }
    </div>
  )
}
