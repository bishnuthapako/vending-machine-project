import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import chips from "./img/chips.png"

const Chips = () => {
  const [newDiv, setNewDiv] = useState([]);
  const [count, setCount] = useState(0)

  console.log(newDiv, 'newDivs')
  function addNewDivs(){
    const left = Math.floor(Math.random() * (80 - 20 + 1)) + 20;
    const bottom = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
    const newDivStyle = {
      left: `${left}%`,
      bottom: `${bottom}%`
    } 
    setNewDiv(prevs => [...prevs, newDivStyle]);
    setCount(prev=> prev + 1)
  }



  const navigate = useNavigate();
  return (
    <div className="chips-page">
      <div className='chips text-white text-center p-4'>
        <p className='fw-bold text-white'>BAGS EATEN: {count}</p>
        <button onClick={addNewDivs} className='btn btn-warning'>NOM NOM NOM</button>
        <button onClick={()=>{navigate("/")}} className='btn btn-link text-white'>GO BACK</button>
      </div>
      {newDiv.map((style, idx)=>(
           <div className='new-chips' style={style} key={idx}>
           <img src={chips} alt='Chips' />
         </div>
      ))}
       {/* <div className='new-chips' style={{left: "20%", bottom: "50%"}}>
           <img src={chips} alt='Chips' />
      </div> */}
    </div>
  )
}

export default Chips
