import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux/es/exports';
import "./header.css"
import logo from "../../assets/food icon.jpg";
import {RxHamburgerMenu} from "react-icons/rx"
import { RootState, useAppSelector } from '../../constants/store';
import { isTogglemenuOpen } from '../../constants/appSlice';
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { it } from 'node:test';

const Header:React.FC = () => {
 
  const isToggle=useSelector<RootState>((state)=>state.app.isToggle)
 const dispatch=useDispatch();
 const toggleHamenu=()=>{
  dispatch(isTogglemenuOpen())
 }
 const items=useAppSelector((state)=>state.cart.items);
 
  return (
    <>

      <div className='header '>
      <div className='ham_menu'>
       <RxHamburgerMenu size={40}  onClick={toggleHamenu} />
      </div>
      <div className="brand ">
        <Link to="/" className='brand'>
        <img src={logo} alt="" />
        </Link>
       
      
      </div>
      {
        isToggle ?
        <motion.div animate={{x:8}} transition={{ ease: "easeOut", duration: 2 }}>
        <div className="nav-link container-fluid"> 
        <ul>
          
          <li><Link className='nav-link' to='/'>Home</Link></li>
          <li><Link className='nav-link' to='/about'>About us</Link></li>
          <li><Link className='nav-link' to='/contact'>Help</Link></li>
          <div className='position-relative cart'>
          <li className=' nav-link'><Link className='nav-link' style={{fontSize: "1.5rem"} } to='/cart'><AiOutlineShoppingCart /></Link></li>

          <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>{items.length}</span>
          </div>
        
        </ul>
        
       
      </div>
      </motion.div>
      :<div></div>
      }
   

      


     

    </div>
    
   
    

  
    </>
  )
}
export default Header



