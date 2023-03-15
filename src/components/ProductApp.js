import React, {useState, useEffect, useCallback} from "react";
import Container from "react-bootstrap/container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faHeart} from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import {Row} from "react-bootstrap";
function isEmpty(val)
{
    return val === "" || val === undefined || val === null || val === [];
}

function ProductApp() {
    const [products, setProducts] = useState(null);
    const [sortedProducts, setSortedProducts] = useState("");
    const [searchCategory, setSearchCategory] = useState("");

    useEffect(() => {
        fetchProducts();
    }, [sortedProducts, searchCategory])
    const fetchProducts = async () => {
        let response = await fetch("https://fakestoreapi.com/products");
        let products = await response.json();


        if(!isEmpty(sortedProducts)  && sortedProducts === "up" )
        {
            products = (products.sort((a, b) => a.price > b.price ? 1 : -1));
        }
        else if(!isEmpty(sortedProducts)  && sortedProducts === "down" )
        {
            products = (products.sort((a, b) => a.price < b.price ? 1 : -1));
        }
        if(!isEmpty(searchCategory) && searchCategory !== '')
        {
            products = (products.filter(product => (product.category === searchCategory)))
        }

        setProducts(products);
    }

console.log(products)
    const SetPriceSort = (event) =>
    {
        setSortedProducts(event.target.value);
    }
    const SetCategory = (event) => {
        setSearchCategory(event.target.value);
    }

    return (
        <>
            <div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Сортування за ціною: </span>
                        <input type="text" defaultValue={null} className="form-control" placeholder="up/down"
                               onInput={SetPriceSort}/>
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="">Фільтрація по категоріям: </span>
                    </div>
                    <select className="custom-select mr-1">
                        <option selected>Category</option>
                        <option value="1">Green</option>
                        <option value="2">Blue</option>
                        <option value="3">Red</option>
                    </select>
                    <input type="text" defaultValue={null} className="form-control"
                           onInput={SetCategory}/>
                </div>
            </div>
            <div className="card">
                {
                    products && products.map((product) => {
                        return (
                            <Product product={product}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductApp;