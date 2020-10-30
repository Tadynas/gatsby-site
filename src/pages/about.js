import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is my about page.</p>
      <p><Link to="/contact">Contact me.</Link></p>
    </div>
  )
}

export default AboutPage