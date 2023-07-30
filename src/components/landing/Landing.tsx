import React from 'react'
import "./landing.css"
import { useNavigate } from 'react-router-dom'
const Landing = () => {
  const navigate=useNavigate()
  return (
    <>
    <div className='landing '>
      <div className="container slogan ">
      <h2 className=''>
      Savor the flavors <br /> of our carefully crafted dishes
      </h2>
      </div>
      <div className='d-flex justify-content-center order mt-5  '>
      <button className='btn btn-lg  ordernow' onClick={()=>{
        navigate("/restaurants")
      }}>
        Order Now
      </button>
    </div>
    
      
    </div>
 
    </>
    

  )
}

export default Landing
