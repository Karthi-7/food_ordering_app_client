import React,{useState,useEffect} from 'react'
import RestaurantCard from '../RestaurantCard/RestaurantCard'
import 'bootstrap/dist/css/bootstrap.css';
import "./body.css"
import { Restaurant_Url} from '../../utils/constant';
import ShimmerUI from '../shimmerUi/ShimmerUI';
import { Link } from 'react-router-dom';

const BodyContainer:React.FC = () => {

  const[restaurant,setRestaurnt]=useState<any[]>([])
  const[tempRestaurant,settempRestaurnt]=useState<any[]>([])
  const[search,setSearch]=useState<string>("")

  const fetchData=async()=>{
    const data=await fetch(Restaurant_Url);
    const json=await data.json()
     setRestaurnt(json?.result)
     settempRestaurnt(json?.result)
   
   
  //  console.log(json?.data?.cards[0]?.data?.data?.name)

  }
  console.log("tempres=================",tempRestaurant)

  const searchRestaurant=()=>{
    const filterRestaurant=restaurant.filter((res)=>res?.name.toLowerCase().includes(search.toLowerCase()));
    settempRestaurnt(filterRestaurant)

    
    
  }

  useEffect(()=>{
    fetchData()


  },[])

  if(restaurant.length === 0 ) return <ShimmerUI />
  return (
    <div className='body_container '>
        <div className="search__bar mt-3  container">
            <input type="text"  name="" 
             className=' search'
             placeholder='Search your restaurant'  
             onChange={(e)=>setSearch(e.target.value)}
             value={search}
              
            />
            <button className='btn btn-danger btn-sm'
            onClick={searchRestaurant}
            >Search</button>
        </div>
        <div className="restaurant__container container">
        {
          tempRestaurant.map((res)=> 
          <Link to={`/Restaurant/menu/${res?._id}`} key={res?._id} className='nav-link'>
           < RestaurantCard  restaurantInfo={res}/>
           </Link>
           )
        }
             
            
      
         
        </div>
      
    </div>
  )
}

export default BodyContainer
