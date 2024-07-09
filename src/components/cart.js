import React from "react";
import './styles/cart.css'

export default function Cart(){

    return<>
        <div className="container-fluid cart-main-cont">
            <div className="cart-items-cont container-fluid">
                <ul className="cart-items container-fluid">
{/* /////////////////////////////////////////////////////////////////////// */}
                    <li>
                        <div className="cart-item container-fluid d-flex justify-content-between align-items-center py-2">
                            <p className="cart-item-name">item1</p>

                            <div className="itme-second-half d-flex align-items-center justify-content-end">
                                <p className="cart-item-price">$30</p>
                                <div className="cart-item-numbers d-flex justify-content-around align-items-center">
                                    <button className="btn">-</button>
                                    <p className="">1</p>
                                    <button className="btn">+</button>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="cart-item container-fluid d-flex justify-content-between align-items-center py-2">
                            <p className="cart-item-name">item1</p>

                            <div className="itme-second-half d-flex align-items-center justify-content-end">
                                <p className="cart-item-price">$30</p>
                                <div className="cart-item-numbers d-flex justify-content-around align-items-center">
                                    <button className="btn">-</button>
                                    <p className="">1</p>
                                    <button className="btn">+</button>
                                </div>
                            </div>
                        </div>
                    </li>
{/* ////////////////////////////////////////////////////////                     */}
                </ul>
            </div>
            <div className="cart-checkout">
                <div className="cart-bill-cont py-4 pt-5">
                    <ul>
                        <li><p>Subtotat:</p><p>$320</p></li>
                        <li><p>Tax:</p><p>$7(12%)</p></li>
                        <li className="cart-line"><svg width="100%" height="2">
        <line x1="0" y1="0" x2="100%" y2="0" stroke="black" stroke-width="2" />
    </svg></li>
                        <li><p>Total:</p><p>$320</p></li>
                        <li className="justify-content-end"><button className="btn mt-2 btn-dark btn-no-radius">Checkout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}