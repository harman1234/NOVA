import React ,{useState,useContext, useEffect}from "react";
import { Link } from "react-router-dom";
import logo from './../logo.svg'
import './styles/header.css'
import { MainContext } from "../App";
import { toLower } from "lodash";

export default function Header(){

    const thscontext = useContext(MainContext);

    function Menu(){
        
        let State = null;
        function oNCLICKK(event){
            document.location.href = '/category/'+toLower(event.target.innerHTML)
            event.target.nextElementSibling.height = "100%";
       };


        return<>
            <div className="cont" id="menu-cont">
                <div className="container-fluid d-flex justify-content-end align-itmes-center py-3"><svg onClick={()=>{document.getElementById('menu-cont').style.transform = 'translateX(-100%)'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 12.708l-5.246 5.246q-.14.14-.344.15t-.364-.15t-.16-.354t.16-.354L11.292 12L6.046 6.754q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16L12 11.292l5.246-5.246q.14-.14.345-.15q.203-.01.363.15t.16.354t-.16.354L12.708 12l5.246 5.246q.14.14.15.345q.01.203-.15.363t-.354.16t-.354-.16z"/></svg></div>
                <div>
                    <div className="inputcont d-flex justify-content-between" id="search" onClick={()=>{window.location.href = "/search"}} >
                        <h6>Search...</h6>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m226.83 221.17l-52.7-52.7a84.1 84.1 0 1 0-5.66 5.66l52.7 52.7a4 4 0 0 0 5.66-5.66M36 112a76 76 0 1 1 76 76a76.08 76.08 0 0 1-76-76"/></svg>
                    </div>
                    <div className="container mx-4">
                        <div className="category">
                            <h6 onClick={oNCLICKK}>Men</h6>
                            <ul className="category-item">
                                <li>item 1</li>
                                <li>item 1</li>
                                <li>item 1</li>
                                <li>item 1</li>
                            </ul>
                        </div>
                    </div>

                    <div className="container mx-4">
                        <div className="category">
                            <h6 onClick={oNCLICKK}>Women</h6>
                            <ul className="category-item">
                                <li>item 1</li>
                                <li>item 1</li>
                                <li>item 1</li>
                                <li>item 1</li>
                            </ul>
                        </div>
                    </div>

                    <div className="container mx-4">
                        <div className="category">
                            <h6 onClick={oNCLICKK}>Kids</h6>
                            <ul className="category-item">
                                <li>item 1</li>
                                <li>item 1</li>
                                <li>item 1</li>
                                <li>item 1</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </>
    };

    

    return<>
        <nav className="nav nav-expand-lg mainnav">
            <div className="container-fluid d-flex justify-content-between align-items-start mx-3 pt-4">
                <div className="d-flex align-items-start" style={{color:thscontext.Color}}>
                    <svg cursor={"pointer"} onClick={()=>{document.getElementById('menu-cont').style.transform = 'translateX(0%)'}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1" d="M4 8.5h16m-16 7h16" color="currentColor"/></svg>
                    <Link to="/">
                        <svg className="logo" fill={thscontext.Color} viewBox="0 0 519 131"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.78 4.96H40.9L97.51 85.88H97.85V7.34H82.21V4.96H116.21V7.34H100.57V126H95.98L19.48 17.03H19.14V123.62H34.78V126H0.78V123.62H16.42V7.34H0.78V4.96ZM155.856 65.82C155.856 77.6067 156.536 87.41 157.896 95.23C159.256 102.937 161.353 109.113 164.186 113.76C167.133 118.293 170.873 121.467 175.406 123.28C180.053 125.093 185.549 126 191.896 126C200.283 126 206.856 124.47 211.616 121.41C216.376 118.237 219.946 113.93 222.326 108.49C224.706 102.937 226.179 96.42 226.746 88.94C227.426 81.3467 227.766 73.13 227.766 64.29C227.766 56.3567 227.483 48.82 226.916 41.68C226.463 34.4267 225.046 28.08 222.666 22.64C220.286 17.0867 216.659 12.7233 211.786 9.54999C207.026 6.26332 200.396 4.61999 191.896 4.61999C183.963 4.61999 177.616 6.14999 172.856 9.20999C168.096 12.1567 164.469 16.35 161.976 21.79C159.483 27.23 157.839 33.69 157.046 41.17C156.253 48.65 155.856 56.8667 155.856 65.82ZM128.146 65.82C128.146 56.1867 130.073 47.46 133.926 39.64C137.893 31.82 142.936 25.1333 149.056 19.58C155.176 14.0267 162.033 9.77666 169.626 6.82999C177.219 3.76999 184.643 2.23999 191.896 2.23999C199.716 2.23999 207.423 3.71333 215.016 6.66C222.723 9.60666 229.523 13.8 235.416 19.24C241.423 24.68 246.239 31.31 249.866 39.13C253.606 46.8367 255.476 55.5633 255.476 65.31C255.476 73.81 253.719 81.9133 250.206 89.62C246.806 97.2133 242.159 103.9 236.266 109.68C230.486 115.46 223.743 120.05 216.036 123.45C208.443 126.737 200.396 128.38 191.896 128.38C183.509 128.38 175.463 126.793 167.756 123.62C160.049 120.333 153.249 115.913 147.356 110.36C141.576 104.693 136.929 98.0633 133.416 90.47C129.903 82.8767 128.146 74.66 128.146 65.82ZM259.727 4.96H316.507V7.34H300.187L335.377 99.48L371.247 7.34H355.947V4.96H388.417V7.34H373.797L325.857 130.59H320.927L274.007 7.34H259.727V4.96ZM436.813 29.27L417.773 75.68H456.873L436.813 29.27ZM381.053 123.62H395.333L445.993 0.199998H450.583L504.133 123.62H518.753V126H461.633V123.62H477.443L457.723 78.06H416.923L398.053 123.62H413.183V126H381.053V123.62Z"/>
                        </svg>
                    </Link>
                </div>
                <div className="menucont">
                <Link style={{color:thscontext.Color}} className="lnk mx-1" to="/auth/login" >Login</Link>
                    <Link style={{color:thscontext.Color}} to="/bag" className="lnk mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m235.92 198.59l-14.26-120a12 12 0 0 0-12-10.59H172v-4a44 44 0 0 0-88 0v4H46.33a12 12 0 0 0-12 10.59l-14.26 120a12 12 0 0 0 2.93 9.35a12.1 12.1 0 0 0 9.08 4.06h191.84a12.1 12.1 0 0 0 9.06-4.06a12 12 0 0 0 2.94-9.35M92 64a36 36 0 0 1 72 0v4H92Zm135 138.63a4.08 4.08 0 0 1-3.08 1.37H32.08a4.08 4.08 0 0 1-3.08-1.37a3.9 3.9 0 0 1-1-3.09l14.25-120a4 4 0 0 1 4-3.54h163.42a4 4 0 0 1 4.05 3.54l14.25 120a3.9 3.9 0 0 1-.97 3.09"/></svg></Link>
                </div>
            </div>
            <Menu />
        </nav>
    </>
};
