import React from 'react'
import "./shimmer.css"

const ShimmerUI:React.FC = () => {
    const arr=new Array(10).fill("")
  return (
    <div className='shimmer-ui container'>
       {
        arr.map((item)=>(
            <div className='shimmer'>{item}</div>
        ))
       
       }
      
    </div>
  )
}

export default ShimmerUI
