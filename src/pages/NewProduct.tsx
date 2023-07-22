import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import ProductContext from '../contexts/ProductContext';
import UserContext from '../contexts/UserContext';
import { INewProduct } from '../@types/product';

export default function NewProduct() {
    // hooks
    const [productName, setProductName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [groupCode, setGroupCode] = useState<string>("");
    const [price, setPrice] = useState<number>(0);

    let { addProducts } = useContext(ProductContext);

    let navigate = useNavigate();

    const { admin } = useContext(UserContext)
    if (!admin) { return <Navigate to="/sign-in" /> }

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        const colorArray: string[] = color.split(", ")

        const newProduct: INewProduct = {
            productName,
            color: colorArray,
            description,
            groupCode,
            price
        }

        console.log(newProduct)

        addProducts(newProduct).then(() => {
            navigate('/product');
        }).catch((error: any) => {
            console.log(error);
            // navigate('/sign-in');
        });
    }

    // TODO: make form more attractive with grid and separate component for inputs

    return (
        <form onSubmit={handleSubmit}>
            <h1>NEW PRODUCT</h1>
            <span>Product Name  </span>
            <input 
                placeholder="Enter product name" 
                type="text" 
                name="productName" 
                value={productName} 
                onChange={e => setProductName(e.target.value)} 
            />
            <br></br><br></br>
            <span>Description  </span>
            <input 
                placeholder="Enter description" 
                type="text" 
                name="description" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
            />
            <br></br><br></br>
            <span>Colors (separate by comma) </span>
            <input 
                placeholder="Enter colors" 
                type="text" 
                name="color" 
                value={color} 
                onChange={e => setColor(e.target.value)} 
            />
            <br></br><br></br>
            <span>Group Code </span>
            <input 
                placeholder="Enter group code" 
                type="text" 
                name="groupCode" 
                value={groupCode} 
                onChange={e => setGroupCode(e.target.value)} 
            />
            <br></br><br></br>
            <span>Price  </span>
            <input 
                placeholder="Enter price" 
                type="number" 
                name="price" 
                value={price} 
                onChange={e => setPrice(parseInt(e.target.value))} 
            />
            <br /><br />
            <button>Create New Product</button>
        </form>
    )
};
