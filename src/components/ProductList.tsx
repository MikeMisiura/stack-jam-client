import React from 'react';
import ProductContext from '../contexts/ProductContext';
import { Link } from 'react-router-dom';

const ProductList = () => {
    return (
        <ProductContext.Consumer>
        {
            ({ product }) => {
                return <div>
                    <h1>Product List</h1>
                    <Link to="/product/new">Add New Product</Link>
                    <div>
                        {product.map((c) => {
                            return (
                                <div key={c.id}>
                                    <h2>{c.name} | ${c.price}</h2>
                                    <p>{c.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        }
        </ProductContext.Consumer>
    );
}

export default ProductList;