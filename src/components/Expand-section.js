import React from "react";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default function ExpanSection({items,cat}){

    

    return<>
        <section className="expand-main-cont">
               {Object.keys(items).map((item,i)=>(
                
                <Link to={"/item/"+cat+"/"+items[item]['id']} style={{color:"black",textDecoration:"none"}}>
                    <SingleItem item = {items[item]}/>
                </Link>
               ))}
        </section>
        
        
    </>
}

function SingleItem(props){

    function saveCart(e){
        e.preventDefault();
    }

    return<>
        <div className="sec-cont">
            <div className="sec-img-cont">
                <img src={props.item['img']}/>
            </div>
            <div className="sec-content-cont d-flex justify-content-between align-items-start pt-2 px-2">
                <div className="tag-cont">
                    <p>{props.item['name']}</p>
                    <p>{props.item['price']}</p>
                </div>
                <div>
                <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={saveCart} ><path d="M13.2 16.459C12.9186 16.4586 12.6478 16.3514 12.4425 16.159L9.25424 13.234C9.1849 13.1697 9.09381 13.1339 8.99924 13.1339C8.90466 13.1339 8.81358 13.1697 8.74424 13.234L5.55674 16.159C5.39612 16.3069 5.19594 16.4048 4.98062 16.4409C4.76529 16.477 4.54412 16.4496 4.34407 16.3621C4.14403 16.2747 3.97375 16.1309 3.85402 15.9483C3.73428 15.7658 3.67025 15.5523 3.66974 15.334V3.42773C3.66974 2.93045 3.86728 2.45354 4.21891 2.10191C4.57054 1.75028 5.04746 1.55273 5.54474 1.55273H12.4552C12.9525 1.55273 13.4294 1.75028 13.7811 2.10191C14.1327 2.45354 14.3302 2.93045 14.3302 3.42773V15.3317C14.3321 15.551 14.2689 15.7658 14.1488 15.9492C14.0287 16.1326 13.8569 16.2763 13.6552 16.3622C13.5119 16.4259 13.3568 16.4588 13.2 16.459ZM8.99999 12.3827C9.28267 12.3821 9.55525 12.4878 9.76349 12.679L12.9517 15.604C13.0053 15.6534 13.0722 15.6862 13.1441 15.6982C13.216 15.7102 13.2899 15.701 13.3566 15.6718C13.4234 15.6425 13.4802 15.5944 13.52 15.5333C13.5599 15.4722 13.5811 15.4009 13.581 15.328V3.42773C13.581 3.12937 13.4625 2.84322 13.2515 2.63224C13.0405 2.42126 12.7544 2.30273 12.456 2.30273H5.54474C5.24637 2.30273 4.96022 2.42126 4.74924 2.63224C4.53827 2.84322 4.41974 3.12937 4.41974 3.42773V15.3317C4.41967 15.4046 4.44086 15.476 4.48071 15.537C4.52056 15.5981 4.57734 15.6462 4.64411 15.6755C4.71088 15.7048 4.78474 15.714 4.85665 15.7019C4.92856 15.6899 4.9954 15.6572 5.04899 15.6077L8.23724 12.6752C8.44586 12.4856 8.71807 12.3812 8.99999 12.3827Z" fill="black"/></svg>

                </div>
            </div>
        </div>
    </>
}