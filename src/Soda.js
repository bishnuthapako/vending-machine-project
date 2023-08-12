import React from 'react'
import soda from "./img/coke.gif"
import { useNavigate } from 'react-router-dom'

const Soda = () => {
let navigate = useNavigate()
  return (
    <div className='soda-page'>
      <div className="row">
        <div className="col-4">
            <img src={soda} alt="Coke cola"/>
        </div>
        <div className="col-4 text-center">
            <div className="coke-page rounded-3 p-4">
              <p className="fw-bold text-white">OMG SUGARRRR</p>
              <button onClick={()=>{navigate("/")}} className="btn btn-info">GO BACK</button>
            </div>
        </div>
        <div className="col-4">
            <img src={soda} alt="Coke cola"/>
        </div>
      </div>
    </div>
  )
}

export default Soda
