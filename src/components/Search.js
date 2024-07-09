import React from "react";

export default function Search(){
    return<>
        <div className="container-fluid px-4" style={{marginTop:"200px",position:"absolute"}}>
            <form>
                <input type="text" placeholder="Search" className="form-control" style={{outline:"none", border:"1px solid black", borderRadius:"0px", borderWidth:"1px 0px"}}/>
            </form>
        </div>
    </>
}