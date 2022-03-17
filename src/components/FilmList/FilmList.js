import React from 'react'

import styles from './FilmList.module.scss'

import { useNavigate } from "react-router-dom";

export const FilmList = ({film}) => {
  const navigate = useNavigate();
  return (
    <div className={styles['film-details-container']}>
        <div className={styles['film-title']}>
          <p>{film.title}</p>
          <div className={styles['go-home']} onClick={()=> navigate('/')}>X</div>
        </div>
        <div className={styles['field-container']}>
          <div className={styles['field-title']}>
            RELEASE DATE
          </div>
          <div className={styles['field-description']}>
            {film.release_date}
          </div>
        </div>

        <div className={styles['field-container']}>
          <div className={styles['field-title']}>
            DIRECTOR
          </div>
          <div className={styles['field-description']}>
            {film.director}
          </div>
        </div>

        <div className={styles['field-container']}>
          <div className={styles['field-title']}>
            PRODUCER
          </div>
          <div className={styles['field-description']}>
            {film.producer}
          </div>
        </div>

        <div className={styles['field-container']}>
          <div className={styles['field-title']}>
            OPENING CRAWL
          </div>
          <div className={styles['field-description']}>
            {film.opening_crawl}
          </div>
        </div>
      </div>
  )
}
