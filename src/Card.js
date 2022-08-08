import React from "react";
import Counter from "./Counter";
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Card=({
    id,
    image,
    title,
    rating,
    description
})=>{
    const styles={
        color: rating>=8?"green":"red"
    }

    const[show,setShow]=useState(true)
const descriptionStyle={
    display: show?"block":"none"
}

const navigate=useNavigate();



   return(
    
    <div className="col">
                <div className="card m-4 border-0">
              
                     <img src={image} className="card-img-top image" alt=""></img>
                     <div className="card-body">
                     <div className="d-flex justify-content-between">
                         <h5 className="card-title me-3 fs-4">{title} - {id}</h5>
                         <KeyboardArrowUpIcon onClick={()=>setShow(!show)} />
                         
                         <KeyboardArrowDownIcon />
                         <span style={styles} className="p-1 w-auto fs-6">⭐{rating}</span>
                         </div>
                         <button onClick={()=> navigate("/movies/" + id)}>info</button>
                         <button className="button" onClick={()=>setShow(!show)}>Description</button>
                         <p style={descriptionStyle} className="card-text text-start mt-3">{description}</p>
                         <Counter />
                     
                     </div>
                 
                </div>
            </div>

   )
}

export default Card;
