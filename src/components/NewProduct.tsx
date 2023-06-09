import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductContext from '../contexts/ProductContext';

const NewProduct = () => {
    let [ newProduct, setNewProduct ] = useState({
        name: "",
        description: "",
        price: 0
    });

    let { addProduct } = useContext(ProductContext);
    let navigate = useNavigate();

    function handleChange(event) {
        setNewProduct((prevValue) => {
            return { ...prevValue, [event.target.name]: event.target.value }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        addProduct(newProduct).then(() => {
            navigate('/product');
        }).catch(error => {
            console.log(error);
            navigate('/signin');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>NEW COFFEE</h1>
            <span>Product Name  </span>
            <input placeholder="Enter product name" type="text" name="name" value={newProduct.name} onChange={handleChange} />
            <br></br><br></br>
            <span>Description  </span>
            <input placeholder="Enter description" type="text" name="description" value={newProduct.description} onChange={handleChange} />
            <br></br><br></br>
            <span>Price  </span>
            <input placeholder="Enter price" type="number" name="price" value={newProduct.price} onChange={handleChange} />
            <br></br><br></br>
            <button>Create New Product</button>
        </form>
    )
};

export default NewProduct;