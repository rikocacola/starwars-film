import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
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
        <div className={styles['movie-container']}>
          {films.map((film,idx) => (
            <Link key={film.episode_id} to={`/movie/${idx+1}`} className={styles['movie-card']}>
              <h2>
                {film.title}
              </h2>
              <h4>
                {film.release_date}
              </h4>
              <h3>
                {film.director}
              </h3>
            </Link>
          ))}
        </div>
    </div>
  )
}
