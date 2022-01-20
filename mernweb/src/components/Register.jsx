import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import logo2 from "../images/register.jpg";

const Register = () => {

    const history = useNavigate();
    

    const [user,setUser]=useState({
        username:"",
        email:"",
        password:""
    });

//Handle Inputs
const handleInput= (event)=>{
    let name=event.target.name;
    let value=event.target.value;
    
    setUser({...user,[name]:value});
}

//Handle Submit
const handleSubmit=async(event)=>{
    event.preventDefault();
    //Object DeStructuring
    //Store Oject Data into Variables
    const {username, email, password}=user;
    try{
        //It is Submitted on port 3000 by default
        //Which is frontend but we need to
        //submit it on backend which is on
        //port 3001. So we need proxy.

        const res= await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                username, email, password
            })
        })
        
        if(res.status ===400 || !res){
            window.alert("Already Used Details");
        }else{
            //You need to Restart the Server for Proxy Works
            window.alert("Registered Successfully");
            history.push('/login');
        }
    }catch(error){
            console.log(error);
    }
    
}

    return (
        <div>
            <section id="home">
            <div className="container shadow my-5">
                <div className="row justify-content-center">
                    
                    <div className="col-mod-5 d-flex flex-column
                align-items-center text-black justify-content-center form">
                        <h1 className="display-4 fw-bolder">Hello , Friend</h1>
                        <p className="lead text-center">Enter Your Details to Register</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/login" className="btn btn-outline-dark
                    rounded-pill pb-2 w-5">
                            <p1>Login</p1>
                        </NavLink>
                    </div>
                </div>
            </div>
            </section>
            <div className="container2">
                <div className="split left">
                <div className="centered">
                < img src={logo2} class="Register-logo" alt="logo"/>
                </div>
                </div>
                <div className="split right">
                <div className="centered">
                <div className=" display-6 fw-bolder mb-5">REGISTER</div>
                <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-3">
                        <label for="name" className="form-label">Username</label>
                        <input type="type" className="form-control" id="name" name="username" value={user.username}
                        onChange={handleInput} />
                        
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email}
                        onChange={handleInput}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password}
                        onChange={handleInput} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">I Agree the Terms and Conditions</label>
                    </div>
                    <button type="submit" className="btn btn-success w-100 mt-4 rounded-pill">Register</button>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
    
}

export default Register
