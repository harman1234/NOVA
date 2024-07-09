import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){

    return<>
        <footer className="ochild container-fluid d-flex justify-content-center align-items-center" style={{background:"white",height:"100vh"}}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h3 style={{fontWeight:"200"}} className="mb-3">JOIN OUR NEWSLETTER</h3>
                <div className="d-flex justify-content-between align-items-center">
                    <Link className="text-black px-2" to='www.pinterest.com' >INSTAGRAM</Link>
                    <Link className="text-black px-2" to='www.pinterest.com' >TWITTER</Link>
                    <Link className="text-black px-2" to='www.pinterest.com' >PINTEREST</Link>
                </div>
            </div>
        </footer>
    </>
}