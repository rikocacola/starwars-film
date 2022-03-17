import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './FilmDetails.module.scss'

export const FilmDetails = () => {
  const params = useParams();
  const filmId = params.filmId;
  // const location = useLocation();
  // const {url} = location.state;
  const [film, setFilm] = useState({})
  useEffect(()=>{
    axios.get(`https://swapi.dev/api/films/${filmId}`)
      .then(res => setFilm(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className={styles['film-details-wrap']}>
      <div className={styles['film-title']}>
        <p>{film.title}</p>
      </div>
      {film.opening_crawl}
    </div>
  )
}
