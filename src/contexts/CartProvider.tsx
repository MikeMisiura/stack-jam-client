import axios from "axios";
import { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import React from 'react';
import { ICartProduct, INewProduct, IProduct } from "../@types/product";
import CartContext from "./CartContext";

export const CartProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {

    const [cart, setCart] = useState<ICartProduct[]>([]);

    const baseUrl = "http://localhost:3000/api/cart/";

    useEffect(() => {
        async function fetchData() {
            await getCart();
        }
        fetchData();
    }, []);

    function getCart() {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myAuthToken')}`
        };

        return axios.get(baseUrl, { headers: myHeaders }).then(response => setCart(response.data));
    }

    function addToCart(product: ICartProduct) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myAuthToken')}`
        };

        let newCart: ICartProduct[] = [...cart]
        if (!product.quantity) { product.quantity = 1 }

        const sameProductIndex: number = newCart.findIndex((p) => {
            return p._id == product._id
        })

        if (sameProductIndex === -1) {
            newCart.push(product)
        } else {
            newCart[sameProductIndex].quantity += product.quantity
        }

        return axios.put(baseUrl, newCart, { headers: myHeaders })
            .then(response => setCart(response.data));
    }

    function decrementQuantity(product: ICartProduct) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myAuthToken')}`
        };

        let newCart: ICartProduct[] = [...cart]
        if (!product.quantity) { product.quantity = 1 }


        const sameProductIndex: number = newCart.findIndex((p) => {
            return p._id == product._id
        })

        if (sameProductIndex === -1) { return }

        newCart[sameProductIndex].quantity -= 1

        if (newCart[sameProductIndex].quantity <= 0) {
            newCart[sameProductIndex].quantity = 0
        }

        return axios.put(baseUrl, newCart, { headers: myHeaders })
            .then(response => setCart(response.data));
    }

    function incrementQuantity(product: ICartProduct) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myAuthToken')}`
        };

        let newCart: ICartProduct[] = [...cart]
        if (!product.quantity) { product.quantity = 0 }

        const sameProductIndex: number = newCart.findIndex((p) => {
            return p._id == product._id
        })

        if (sameProductIndex === -1) { return }

        newCart[sameProductIndex].quantity += 1

        return axios.put(baseUrl, newCart, { headers: myHeaders })
            .then(response => setCart(response.data));
    }

    function removeFromCart(product: ICartProduct) {
        let myHeaders = { Authorization: `Bearer ${localStorage.getItem('myAuthToken')}` };
        let newCart: ICartProduct[] = [...cart]

        const sameProductIndex: number = newCart.findIndex((p) => {
            return p._id == product._id
        })

        if (sameProductIndex === -1) { return }

        newCart.splice(sameProductIndex, 1)

        return axios.put(baseUrl, newCart, { headers: myHeaders })
            .then(response => setCart(response.data));
    }

    function emptyCart() {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myAuthToken')}`
        };

        let newCart: ICartProduct[] = []

        return axios.put(baseUrl, newCart, { headers: myHeaders })
            .then(response => setCart(response.data));
    }

    return (
        <CartContext.Provider value={{
            cart,
            getCart,
            addToCart,
            removeFromCart,
            emptyCart,
            decrementQuantity,
            incrementQuantity
        }}>
            {props.children}
        </CartContext.Provider>
    )
};