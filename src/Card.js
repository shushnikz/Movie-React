import React from "react";

const Card=({
    image,
    title,
    rating,
    description
})=>{
   return(
    <div className="col">
                <div className="card m-5 border-0">
              
                     <img src={image} className="card-img-top image" alt=""></img>
                     <div className="card-body">
                     <div className="d-flex justify-content-between">
                         <h5 className="card-title me-3 fs-4">{title}</h5>
                         <span className="p-1 w-auto fs-6">⭐{rating}</span>
                         </div>
                         <p className="card-text text-start mt-3">{description}</p>
                     
                     </div>
                 
                </div>
            </div>
   )
}

export default Card;
