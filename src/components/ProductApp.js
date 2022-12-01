import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHeart} from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";

function ProductApp() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        let response = await fetch("https://fakestoreapi.com/products");
        let products = await response.json();
        setProducts(products);
    }

    return (
        <div className="card">
            {
                products && products.map((product) => {
                    return (
                        <Product product={product}/>
                    )
                })
            }
        </div>

    );

}

export default ProductApp;
//<div className="card" onClick={handleCartFocus}>
//<FontAwesomeIcon icon={faCartShopping} ref={cartRef}/>