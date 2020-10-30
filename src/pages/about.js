import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About</h1>
        <p>This is my about page.</p>
        <p><Link to="/contact">Contact me.</Link></p>
      </Layout>
    </div>
  )
}

export default AboutPage