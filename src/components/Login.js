import React, { useContext } from "react";
import {Routes,Route,Link} from 'react-router-dom';
import './styles/auth.css'
import Register from "./register";
import { MainContext } from "../App";




export default function Auth(){

    return<>
        <Routes>
            <Route path="login" element={<LogIn />}/>
            <Route path="register" element={<Register />}/>
        </Routes>
    </>
}


function LogIn(){

    const isLgo = useContext(MainContext);

    function handlesubmit(e){
        e.preventDefault();
        window.location.href = '/'
    }

    return<>
        <section className="auth-main-cont d-flex mx-5">

            <div className="login-sec">
                <h5 className="mb-3">LOG IN TO YOUR ACCOUNT</h5>
                <form className="d-flex flex-column" onSubmit={handlesubmit}>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <button type="submit" className="">Log In</button>
                </form>
            <p className="mt-3">Have you forgot your password ?</p>
            </div>

            <div className="register-cont">
                <h5>NO ACCOUNT YET ?</h5>
                <Link className="btn mt-3 reg-btn" to="/auth/register">REGISTER</Link>
            </div>

        </section>
    </>
}


