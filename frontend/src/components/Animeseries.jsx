import { useState, useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function Animeseries() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState([null]);

  useEffect((req,res)=>{
    axios.get("")
    .then((res)=>{
        setAnime(res.data);
        setLoading(false);

    })
    .catch((error)=>{
      setError(error.message || "Something went wrong");
      setLoading(false)
    })
  },[]);

  if(loading){
    return(
        <>
        <div>Loading...</div>
        </>
    )
  }

  if(error){
    return(
        <>
        <div>Error:{error}</div>
        </>
    )
  }

  
  return (<>
  

      

  </>);
}
