import React from 'react'
import { Link } from 'react-router-dom'
import './Style.css'
import '../Pages/allpages.css'
const Home = () => {
  return (
    <>

      <div>
        <p className='the'>The</p> <p className='siren'>Siren</p>
        <ul>
          <Link to="/api/datas" ><li>Home</li></Link>
          <Link to="/api/bolly"><li>Bollywood</li></Link>
          <Link to="/api/tech"><li>Technology</li></Link>
          <Link to="/api/holly"><li>Hollywod</li></Link>
          <Link to="/api/fitty"><li>Fitess</li></Link>
          <Link to="/api/food"><li>Food</li></Link>
          <Link to="/kashmir"><li>Kashmir</li></Link>
          <Link to="/cat"><li>Cat</li></Link>
        </ul>
        <hr />
      </div>


      
    </>
  )
}

export default Home