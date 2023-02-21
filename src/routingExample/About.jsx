import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <div>About</div>
    <Link to={`/`}>to home page</Link> <br />
    <Link to={`/contact`}>to contact page</Link>
    </>
  )
}

export default About