import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>This is my about page.</p>
        <p><Link to="/contact">Contact me.</Link></p>
      </Layout>
    </div>
  )
}

export default AboutPage