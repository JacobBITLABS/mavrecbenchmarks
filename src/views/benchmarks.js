import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './benchmarks.css'

const Benchmarks = (props) => {
  return (
    <div className="benchmarks-container">
      <Helmet>
        <title>benchmarks - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="benchmarks - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name1"></Navbar>

      <div className='particles'>
        <Particles/>
      </div>
    </div>
  )
}

export default Benchmarks
