import React from 'react'
import logo1 from "../images/home1.png";
import { NavLink } from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-mod-1 mt-40">
                            <h1 className="display-4 fw-bolder mb-40 text-center text-white">WELCOME</h1>
                            <div className="lead text-center fs-4 mb-40 text-white">Free From Anxiety</div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <div className="container1">
                <div className='home-left'>
                < img src={logo1} class="Home-logo1" alt="logo"/>
                </div>
                
                
            </div>
        </div>
    );
}

export default Home