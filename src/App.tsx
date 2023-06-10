import React from 'react';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ProductList from './components/ProductList'
import NewProduct from './components/NewProduct'
import { ProductProvider } from './contexts/ProductProvider';
import { UserProvider } from './contexts/UserProvider';

function App() {
    return (
        <UserProvider>
            <ProductProvider>

                <div>
                    <BrowserRouter>
                        <nav>
                            <Link to="/sign-up">Sign Up</Link>
                            <span> | </span>
                            <Link to="/sign-in">Sign In</Link>
                            <span> | </span>
                            <Link to="/product">Product List</Link>
                            <hr></hr>
                        </nav>
                        <Routes>
                            <Route path="/sign-in" element={<SignIn />} />
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route path="/product/new" element={<NewProduct />} />
                            <Route path="/product" element={<ProductList />} />
                            <Route path="/" element={<SignIn />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </ProductProvider>
        </UserProvider>
    );
}

export default App;
