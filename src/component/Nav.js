import React from "react"
import "./css/nav.css"
import svglogo from "./images/svglogo.png"
import th from "./images/th.jpg"
import { Link } from "react-router-dom"
import Form from "./Form"
function Nav(){
    return(
     <>
     
      
             <div className="nav-container">
                
               <Link to="/instaclone"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="insta clone" style={{width:'60px',height:"50px"}}  id="logo"/> </Link>
                <Link to="newpost"  element={<Form/>}>  <img id="camera" src="https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-camera-icon-vector-illustration-in-line-style-for-any-purpose-png-image_989668.jpg" alt="camera_icon" style={{width:'90px',float:'right'}} /></Link>
                
                
             </div>
          
    </>
    )
}


export default Nav