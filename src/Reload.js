import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reload = () => {

  const navigate = useNavigate();

  return (
    <div className='container text-center reload-page'>
      <div className="refresh">
        <p className="fw-bold text-white">YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</p>
        <button onClick={()=> {navigate("/")}} type="submit" className="btn btn-warning">GO BACK</button>
      </div>
    </div>
  )
}

export default Reload
