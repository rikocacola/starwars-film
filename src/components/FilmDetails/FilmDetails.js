import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ReactLoading from 'react-loading';

import styles from './FilmDetails.module.scss'

import { FilmList } from '../FilmList/FilmList'

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
      {
        Object.keys(film).length === 0 ? (
          <div className={styles['loading-background']}>
            <ReactLoading height={'15%'} width={'15%'} type="spin" color="#fff"/>
          </div>
        ) : (
          <FilmList film={film}/>
        )
      }
    </div>
  )
}
