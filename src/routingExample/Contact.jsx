import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <div>Contact</div>
    <Link to={`/`}>to home page</Link> <br />
    <Link to={`/about`}>to about page</Link>
    </>
  )
}

export default Contact