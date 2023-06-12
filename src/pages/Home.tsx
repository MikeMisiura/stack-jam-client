import React from 'react';
import ProductContext from '../contexts/ProductContext';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import ProductList from '../components/ProductList';


export default function Home() {

    return (
        <div>
            <h1>Welcome to the Stack Jam Website!</h1>

            <ProductList />
        </div>
    );
}