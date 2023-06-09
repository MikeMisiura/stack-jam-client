import axios from "axios";
import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import React from 'react';

export const ProductProvider = (props) => {

    const [ product, setProduct ] = useState([]);
    const baseUrl = "http://localhost:3000/api/product/";

    useEffect(() => {
        async function fetchData() {
            await getAllProduct();
        }
        fetchData();
    }, []);

    function getAllProduct() {
        return axios.get(baseUrl).then(response => setProduct(response.data));
    }

    function getProduct(id) {
        
    }

    function addProduct(product) {        
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myProductToken')}`
        };

        return axios.post(baseUrl, product, { headers: myHeaders })
            .then(response => {
                getAllProduct();
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function editProduct(product) {

    }

    function deleteProduct(id) {

    }

    return (
        <ProductContext.Provider value={{
            product,
            getProduct,
            addProduct,
            editProduct,
            deleteProduct
        }}>
            { props.children }
        </ProductContext.Provider>
    )
};