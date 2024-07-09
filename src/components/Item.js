import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './styles/item.css'

export default function Item({items}){
    const {id} = useParams()
    var Item = null

    for(const key in items){
        if(items[key]['id'] == id){
            Item = items[key];
            break;
        }
        
    }

   
    return<>
        <section className="items-wrapper">
            <div className="items-main-cont">
            <div className="items-img-cont">
                <div>
                    <img src={Item['img']}/>
                </div>
            </div>
            <div className="items-descp-cont">

                <div className="descp-main-cont p-3">

                    <div className="description-first">
                        <div className="descp-first-cont d-flex justify-content-between">
                            <p>
                                <span className="item-name">{Item['name']}</span><br/>
                                <span className="item-og-price">{Item['price']}</span>
                                <span className="discount">{Item['discount']}</span>
                                <span className="item-current-price">$1000</span>
                            </p>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M13.2001 16.4587C12.9187 16.4584 12.6479 16.3511 12.4426 16.1587L9.2543 13.2337C9.18496 13.1694 9.09387 13.1337 8.9993 13.1337C8.90473 13.1337 8.81364 13.1694 8.7443 13.2337L5.5568 16.1587C5.39618 16.3066 5.196 16.4046 4.98068 16.4406C4.76535 16.4767 4.54418 16.4494 4.34413 16.3619C4.14409 16.2744 3.97382 16.1307 3.85408 15.9481C3.73434 15.7655 3.67031 15.5521 3.6698 15.3337V3.42749C3.6698 2.93021 3.86734 2.4533 4.21897 2.10167C4.57061 1.75003 5.04752 1.55249 5.5448 1.55249H12.4553C12.9526 1.55249 13.4295 1.75003 13.7811 2.10167C14.1328 2.4533 14.3303 2.93021 14.3303 3.42749V15.3315C14.3321 15.5507 14.269 15.7656 14.1489 15.949C14.0287 16.1324 13.857 16.2761 13.6553 16.362C13.512 16.4256 13.3569 16.4586 13.2001 16.4587ZM9.00005 12.3825C9.28273 12.3818 9.55531 12.4876 9.76355 12.6787L12.9518 15.6037C13.0054 15.6532 13.0722 15.6859 13.1441 15.6979C13.2161 15.71 13.2899 15.7008 13.3567 15.6715C13.4234 15.6422 13.4802 15.5941 13.5201 15.5331C13.5599 15.472 13.5811 15.4007 13.5811 15.3277V3.42749C13.5811 3.12912 13.4625 2.84297 13.2515 2.632C13.0406 2.42102 12.7544 2.30249 12.4561 2.30249H5.5448C5.24643 2.30249 4.96028 2.42102 4.7493 2.632C4.53833 2.84297 4.4198 3.12912 4.4198 3.42749V15.3315C4.41973 15.4044 4.44092 15.4757 4.48077 15.5368C4.52062 15.5979 4.5774 15.646 4.64417 15.6753C4.71094 15.7045 4.7848 15.7137 4.85671 15.7017C4.92862 15.6897 4.99546 15.6569 5.04905 15.6075L8.2373 12.675C8.44592 12.4854 8.71813 12.381 9.00005 12.3825Z" fill="black"/>
                            </svg>
                        </div>

                        <div className="descp-second">
                            <p>{Item['description']}</p>
                            <span>View More</span>
                        </div>
                        
                    </div>
                    {/* ////////////////////////////////////// */}
                    <div className="description-second p-2">
                        <h5>size:</h5>
                        <div className="sizes mt-3">
                            {Item['sizes'].map((size)=>(<span>{size}</span>))}
                            
                        </div>
                    </div>
                    {/* ////////////////////////////// */}
                    <div className="description-btn mt-3">
                        <button className="btn add-btn">Add</button>
                    </div>

                </div>
            </div>
            </div>
        </section>
    </>
}