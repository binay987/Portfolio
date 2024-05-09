import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import {FaBars ,FaTimes} from "react-icons/fa";
import React,{useState} from 'react'

const Navbar = () => {
    const [click ,setclick]= useState(false);
    const handleClick = ()=> setclick(!click);    

    const [color,setcolor]=useState(false); //navbar to be fixed and background color change when scroll
    const changeColor =() =>{
        if(window.scrollY >=100){
            setcolor(true);
        }else{
            setcolor(false);
        }
    };
    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg":
    "header"}>
        <Link to="/"> 
            <h1>Binaya Basnet</h1>

        </Link>
        <ul className={click ? "nav-menu active":"nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: "#fff"}} />
        ):(
        <FaBars size={20} style={{color: "#fff"
        }} />
        )}
            
            
            
        </div>
    </div>
  )
} 

export default Navbar