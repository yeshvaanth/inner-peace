import React, {  useState } from "react";
import { NavLink } from 'react-router-dom'
import logo3 from "../images/login.jpg";


const Login = () => {
    
    const [user, setUser]=useState({
        email:'',
        password:''
    });

    //Handle Inputs
    const handleInput= (event)=>{
    let name=event.target.name;
    let value=event.target.value;
    
    setUser({...user,[name]:value});
    
}

//Handle Login
const handleSubmit=async(event)=>{
    event.preventDefault();
    
    const { email, password}=user;
    try{
        

        const res= await fetch('/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                 email, password
            })
        })
        
        if(res.status ===400 || !res){
            window.alert("Invalid Credentials");
        }else{
            //You need to Restart the Server for Proxy Works
            window.alert("Login Successfully");
            window.location.reload();
            //Token is generated When we logged in
            
            
        }
    }catch(error){
            console.log(error);
    }
    
}

    return (
        <div>
            <section id="home">
            <div className="container shadow my-5">
                <div className="row">
                    <div className="col-mod-5 d-flex flex-column
                align-items-center text-white justify-content-center form">
                        <hi className="display-4 fw-bolder">Welcome Back</hi>
                        <p className="lead text-center">Enter Your Credentials To Login</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/register" className="btn btn-outline-dark
                    rounded-pill pb-2 w-5">
                            <p1>Register</p1>
                        </NavLink>
                    </div>
                    </div>
                    </div>
                    </section>
                    <div className="container2">
                <div className="split left">
                <div className="centered">
                < img src={logo3} class="Login-logo" alt="logo"/>
                </div>
                </div>
                <div className="split right">
                <div className="centered">
                        <div className=" display-6 fw-bolder mb-5">LOGIN</div>
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email}
                        onChange={handleInput} />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={user.password}
                        onChange={handleInput} />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <button type="submit" class="btn btn-success w-100 mt-4 rounded-pill">Login</button>
                        </form>
                    </div>
                    </div>
                    </div>
                </div>
            
    );
}

export default Login