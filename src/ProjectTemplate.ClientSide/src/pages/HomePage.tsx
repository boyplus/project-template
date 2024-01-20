import React from 'react'

import '@/css/home-page.css'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className='home-page-container'>
      <h1>Home Page</h1>
      <div className='home-page-actions-container'>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  )
}

export default HomePage