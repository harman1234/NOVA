import React from "react"
import './styles/register.css'


export default function Register(){

    return<>
        <section className="reg-main-cont">
            <div className="reg-cont">
                <h5 className="mb-5">PERSONAL DETAILS</h5>
                <form className="d-flex flex-column reg-form">
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="text" placeholder="name"/>
                    <div>
                        <input type="text" name="countryCode" placeholder="+91"/>
                        <input type="text" name="number" placeholder="mobile number"/>
                    </div>
                    <p>we will send an sms to confirm</p>
                    <button type="submit">Register</button>
                </form>
            </div>
        </section>
    </>
}