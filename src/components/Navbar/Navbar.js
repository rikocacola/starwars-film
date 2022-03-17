import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={styles['navbar-wrap']}>
      <Link className={styles['logo-navbar']} to="/">
        <img src="/logo-star-wars.png" alt='logo-star-wars'/>
      </Link>
    </nav>
  )
}
