import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  return (
    <div className="home">
      <div className="vending-container text-center">
      <div className="row">
        <div className="col-lg-4 col-xs-12 rounded-1 text-right">
          <div className='leftbackground rounded-3 p-3'>
            <h3 className='fw-bold text-white'>HELLO I AM A VENDING MACHINE. WHAT WOULD YOU LIKE TO EAT?</h3>
          </div>
        </div>
        <div className="col-lg-4 col-xs-12">
        hello
        </div>
        <div className="col-lg-4 col-xs-12">
        <ul>
            <li><Link to="/soda" className='text-white fw-bold list-type'>SODA</Link></li>
            <li><Link to="/chips" className='text-white fw-bold list-type'>CHIPS</Link></li>
            <li><Link to="/reload" className='text-white fw-bold list-type'>FRESH SARDINES</Link></li>
      </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
