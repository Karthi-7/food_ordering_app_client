import React from 'react'
import {useRouteError} from "react-router-dom"

const Error:React.FC = () => {
    const err=useRouteError()
    console.log(err)
  return (
    <div>
      error page
    </div>
  )
}

export default Error
