import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/soda">SODA</Link></li>
        <li><Link to="/chips">CHIPS</Link></li>
        {/* <li><Link to="/reload">REFRESH SARDINES</Link></li> */}
      </ul>
    </div>
  )
}

export default Nav
