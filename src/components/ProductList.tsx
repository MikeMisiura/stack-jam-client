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
                        {product.map((c: { id: React.Key | null | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
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