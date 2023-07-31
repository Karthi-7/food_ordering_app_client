import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { RestaurantById_Url, image_url, menu_Restarunt_Url } from '../../utils/constant';
import { AiFillStar } from 'react-icons/ai';
import "./resmenu.css"
import { useDispatch, useSelector,TypedUseSelectorHook } from 'react-redux';
import { useAppDispatch,useAppSelector } from '../../constants/store';
import { addtoCart,removeItem } from '../../constants/cartSlice';
import 'bootstrap/dist/css/bootstrap.css';


interface Menu{
    _id:string,
    name:string,
    image:string,
    description:string,
    price:string,
    restaurant:[string],

}

interface Restaurant{
    _id:string,
    name:string,
    rating:string,
    minutes:string,
    cuisines:[string]
    
}


const RestaurantMenu:React.FC = () => {
    const{resId}=useParams()
    const[menu,setMenu]=useState([]);
    const[restaurant,setRestaurnt]=useState<Restaurant>({
        _id:"",
        name:"",
        rating:"",
        minutes:"",
        cuisines:[""]
    })


  

   
    const dispatch=useAppDispatch();

    const AddtoCart=(item:any)=>{
       
       dispatch(addtoCart(item))
      
    }
    const removeitemCart=(item:any)=>{
      
       dispatch(removeItem(item))
      
    }
   




    const fetchMenu=async()=>{
        const data=await fetch(menu_Restarunt_Url+resId);
        const json=await data.json()
        setMenu(json?.result)
        console.log("menu============menu",json?.result)
        console.log("menu=================",menu)

    }

    const fetchRestaurantById=async()=>{
        const data=await fetch(RestaurantById_Url+resId);
        const json=await data.json()
       
        setRestaurnt(json?.result)
        console.log(restaurant,"======res========")
      

    }


    useEffect(()=>{
        fetchMenu()
        

    },[])

    useEffect(()=>{
        fetchRestaurantById()
    },[])

  return (
    <>
  
    <div className='container mt-5  w-100'>
    <div className='col-lg-12 col-md-12 '>
    
        <h2 className='mx-3 h3 '>{restaurant.name}</h2>
    
        <div className='d-flex flex-wrap'>
            <p className='text-muted mx-3'>{restaurant.minutes}</p>
            <p>{restaurant.cuisines[0]}</p>
          
            <p className='mx-3'> <AiFillStar  className='text-success '/>{restaurant.rating}</p>

          
        </div>
      

      

        {
            menu.map((item:Menu)=>(
                <div className="card m-2  mb-3 shadow-none  bg-light rounded border border-light" key={item._id} >
                  <div className="card-body ">
                    <div className="content d-flex flex-wrap">
                    <img className='food__img mx-3 img-fluid rounded ' src={`${image_url}${item.image}`} alt="food-menu" />
                    <div>
                    <h6 className='mt-2 fw-bold'>{item.name}</h6>
                    <p>	&#8377;{item.price}</p>
                    <button className='btn btn-secondary add-item mx-2'  onClick={()=>{AddtoCart(item)}}>Add Item</button>
                    <button className='btn btn-secondary add-item' onClick={()=>{removeitemCart(item)}}>Remove Item</button>
                    </div>
                    </div>
                   
                    <p className='.text-muted desc w-75 m-2'>{item.description}</p>
                    
                  </div>
                </div>
            ))
        }
        
     
      
    </div>
    </div>
   
    </>
  )
}

export default RestaurantMenu
