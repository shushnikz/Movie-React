import React from "react";
import { useState } from "react";

const AddMovie=({
    name,
    poster,
    review,
    summary
})=>{
    const[title,setName]=useState("")
    const[image,setPoster]=useState("")
    const[rating,setRating]=useState("")
    const[description,setSummary]=useState("")
    const[addmovie,setAddMovie]=useState([movieData])
    return(
        <div className="add-movie">
          <input onChange={(event)=> setName(event.target.value)} type="text" placeholder="Enter Movie Name"/>
          <br></br>
          <br></br>
          <input onChange={(event)=> setPoster(event.target.value)} type="text" placeholder="Enter Poster"/>
          <br></br>
          <br></br>
          <input onChange={(event)=> setRating(event.target.value)} type="text" placeholder="Enter Movie Rating"/>
          <br></br>
          <br></br>
          <input onChange={(event)=> setSummary(event.target.value)} type="text" placeholder="Enter Description of Movie"/>
          <br></br>
          <br></br>
          <button onClick={()=> {
            const newMovie={
                title:title,
                image:image,
                rating:revie,
                description:summary
            }
            setAddMovie([...addmovie,newMovie])}}>Add Movie</button>
        </div>
    )
}

export default AddMovie;