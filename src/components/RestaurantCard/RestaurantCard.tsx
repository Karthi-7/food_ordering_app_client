import React from 'react'
import res_img from "../../assets/faas.webp"
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
import './restaurantCard.css'
import {image_url } from '../../utils/constant'

type Data={
  _id:string,
  name:string,
  image:string,
  rating:string,
  cuisines:string[],
  cost:string
}


interface Props{
  restaurantInfo:Data
}
const RestaurantCard:React.FC<Props>=(props) => {
  console.log("props",props)
 const {_id,name,image,rating,cuisines,cost}=props.restaurantInfo
  return (
    
    <div className='restarant__card mt-3'>
      <div className='restro__img'>
      <img src={image_url+image} alt="restaurantImg" />
      </div>
     
      <h5 className='mx-2 mt-1'>{name}</h5>
      <div className='cuisines'>
    
            <span className='mx-2'>{cuisines[0]}</span>
            <span className='mx-2'>{cuisines[1]}</span>

      </div>
      <div className='rating mx-2 badge badge-success'>
      <AiFillStar /> {rating}
      </div>

   
    </div>
  )
}

export default RestaurantCard
