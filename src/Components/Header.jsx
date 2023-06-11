import React from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from "react-icons/fi"
import { useSelector } from 'react-redux'
import img22 from "../assets/7459344.jpg"

function Header() {
    const {cartItems}=useSelector((state)=>state.cart)
    return (
        <nav>
            <h2>
              <img  src={img22} alt="hhh"/>
         
            
            </h2>
               
          <div style={{textAlign:"left"}} className='LogimSing'>
          <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
          </div>
          
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/cart"}>
                    <FiShoppingBag />
                    <p>{cartItems.length}</p>
                </Link>
           
              
            </div>
        </nav>

    )
}

export default Header