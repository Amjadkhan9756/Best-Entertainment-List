
import React from 'react';
import { Link , useNavigate} from 'react-router-dom';

import axios from "axios";
import {ToastContainer, toast, Bounce} from 'react-toastify';
import { useState } from 'react';

function Registation() {

    const[InputValues , setInputValues] = useState({

        username: "",
        email: "",  
        password: ""
    });

   

    const navigate = useNavigate();
    let handleInputChange =(event)=>{
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        setInputValues((currentValues)=>{
            currentValues[fieldName] = fieldValue;
            return {...currentValues};

        });
    }
     const onSumbit = async (e) => {
        e.preventDefault();
        try{
        
            const {data}= await axios.post("https://full-stack-stock-trading-platform.onrender.com/signup",{...InputValues},{
                withCredentials: true,
            });
            const {message, success} = data;
            if(success){
                toast.success(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);                
            }
            else{
                toast.error(message);
            }

        }
        catch(er){
            console.log(er);
        }




    }

    return ( 

<div className="container d-flex align-items-center justify-content-center min-vh-100 pb-5">
  <div className="card p-4 shadow rounded-4" style={{maxWidth: "400px", width: "100%"}}>
    <h3 className="text-center mb-3 fw-bold">Create Account</h3>

    <form  onSubmit={onSumbit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter your username"
           name="username"
            value={InputValues.username}
            onChange={handleInputChange}
          
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"  
            name="email"
            value={InputValues.email}
            onChange={handleInputChange}
          
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter password"
            name="password"
            value={InputValues.password}
            onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-2">Sign Up</button>
    </form>

    <div className="text-center mt-3">
      <small>Already have an account? <Link to="/login">Login</Link></small>
    </div>
  </div>
  <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
  
  />
   
</div>

     );
}

export default  Registation;