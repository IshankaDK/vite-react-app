import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>Home</div>
    <Link to={`about`}>to about page</Link> <br />
    <Link to={`/contact`}>to contact page</Link>
    </>
  )
}

export default Home