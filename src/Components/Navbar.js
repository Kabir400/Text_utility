import "./Navbar.css";
import React,{useState} from "react";
import { Link } from 'react-router-dom';
function Navbar(props){
    return(
     <>
     <nav className="navbar">
    <ul>
        <li><Link to="/" style={{color:props.mode==="Dark Mode"?"#303064":"white"}}>TextUtils</Link></li>
        <li><Link to="/" style={{color:props.mode==="Dark Mode"?"#303064":"white"}}>Home</Link></li>
        <li><Link to="/about"style={{color:props.mode==="Dark Mode"?"#303064":"white"}}>About</Link></li>
    </ul>
    
     </nav>
     
     </>


    )
}
export default Navbar;