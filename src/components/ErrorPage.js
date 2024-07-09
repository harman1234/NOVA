import { height, width } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";
import { Link } from "react-router-dom";



export default function Error404(){

    return<>

        <section className="containe d-flex justify-content-center align-items-center" style={{position:"float", height:"100vh", width:"100vw", backgroundImage:"URL(https://images.pexels.com/photos/1144834/pexels-photo-1144834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",backgroundPosition:"center" }}>
            <div style={{background:"rgba(255, 255, 255, 0.33)"}} className="p-5 text-black ">
                <h5 className="mb-3" style={{fontSize:"24px",fontWeight:"200"}}>Error while loading page.Please return</h5>
                <Link style={{background:"none",fontSize:"14px", border:"1px solid black",color:"black",textDecoration:"none"}} className="px-3 py-1" to='/'>Return Home</Link>
            </div>
        </section>
    </>
}