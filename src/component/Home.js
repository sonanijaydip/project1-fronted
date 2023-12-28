import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
            <a href='/About'>about</a><br></br>
            <a href='/Contact'>contact</a><br></br>
            <a href='/login'>login</a><br></br>
            <a href='/offcanvas'>offcanvas</a>           

    </div>
  )
}

export default Home
