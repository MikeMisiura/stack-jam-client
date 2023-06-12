import React from 'react';
import ProductContext from '../contexts/ProductContext';
import { Link } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { useContext } from 'react';
import { IProduct } from '../@types/product';


const ProductList = () => {

    return (
        <ProductContext.Consumer>
        {
            ({ product }) => {
                return <div>
                    <div>
                        {product.map((p: IProduct) => {
                            return (
                                <div key={p.id}>
                                    <h2>{p.productName} | ${p.price}</h2>
                                    <p>{p.description}</p>
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