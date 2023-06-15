import axios from "axios";
import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import React from 'react';
import { INewProduct, IProduct } from "../@types/product";

export const ProductProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    const [product, setProduct] = useState([]);
    const baseUrl = "http://localhost:3000/api/products/";

    useEffect(() => {
        async function fetchData() {
            await getAllProduct();
        }
        fetchData();
    }, []);

    function getAllProduct() {
        return axios.get(baseUrl).then(response => setProduct(response.data));
    }

    function getProduct(id: any) {

    }

    function addProduct(product: IProduct) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myAuthToken')}`
        };

        return axios.post(baseUrl, product, { headers: myHeaders })
            .then(response => {
                getAllProduct();
                return new Promise(resolve => resolve(response.data));
            });
    }

    function addProducts(product: INewProduct) {
        for (let colorIndex = 0; colorIndex < product.color.length; colorIndex++) {
            const color = product.color[colorIndex];

            let newProduct: IProduct = {
                productName: product.productName,
                color,
                description: product.description,
                price: product.price,
                groupCode: product.groupCode
            }

            addProduct(newProduct)
        }
    }

    function editProduct(product: any) {

    }

    function deleteProduct(id: any) {

    }

    return (
        <ProductContext.Provider value={{
            product,
            getProduct,
            addProducts,
            editProduct,
            deleteProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
};