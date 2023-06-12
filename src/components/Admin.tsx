import React from 'react';
import ProductContext from '../contexts/ProductContext';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';


export default function Admin() {

    const { admin } = useContext(UserContext)

    return (
        <>
            <h1>Admin Page</h1>
            <div>

            </div>
        </>
    );
}

