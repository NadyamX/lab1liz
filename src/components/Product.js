import React, {useEffect, useRef, useState} from "react";

import ProductApp from "./ProductApp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHeart} from "@fortawesome/free-solid-svg-icons";
import Sort from "./Sort";
import {Row} from "react-bootstrap";

const Product =({product}) => {

    //const cartRef = useRef()
    useEffect(()=>{
        console.log('Setting up effect!')
        return () =>{
            console.log('Cleaning up effect!')
        }
    },[])
    /*const handleCartFocus = () =>{
        cartRef.current.classList.toggle('text-danger');
        console.log(cartRef)
    }*/

    return(
        <div style={{display: "inline-block",
            width: "300px"}}>
            <div className="d-flex justify-content-end p-2">
                <a href="#" className="card-link text-danger like">
                    <FontAwesomeIcon icon={faHeart}/>
                </a>
            </div>
            <img className="cart-img" src={product.image} alt="Vans"  style={{width:"250px", height:"300px"}}/>
            <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted">Category: {product.category}</h6>
                <p className="card-text">{product.description}</p>
                <div className="options d-flex flex-fill">
                    <select className="custom-select mr-1">
                        <option selected>Color</option>
                        <option value="1">Green</option>
                        <option value="2">Blue</option>
                        <option value="3">Red</option>
                    </select>
                    <select className="custom-select ml-1">
                        <option selected>Size</option>
                        <option value="1">41</option>
                        <option value="2">42</option>
                        <option value="3">43</option>
                    </select>
                </div>
                <div className="buy d-flex justify-context-between align-items-center">
                    <div className="price text-success">
                        <h5 className="mt-4">${product.price}</h5>
                    </div>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </div>
            </div>
        </div>
    )
}

export default Product;
