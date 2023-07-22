import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import NewProduct from './pages/NewProduct'
import { ProductProvider } from './contexts/ProductProvider';
import { UserProvider } from './contexts/UserProvider';
import { MessageProvider } from './contexts/MessageProvider';
import MyNavbar from './components/MyNavbar'
import StackJamColors from './theme/stackJamColors'
import ContactPage from './pages/ContactPage'
import AllProducts from './pages/AllProducts'


function App() {
    return (
        <UserProvider>
            <ProductProvider>
                <MessageProvider>

                                <MyNavbar />
                        <div style={{
                            backgroundColor: StackJamColors.red,
                            color: StackJamColors.white
                        }}>
                            <BrowserRouter>
                                <div style={{ padding: 70 }}>
                                    <Routes>

                                        {/* TODO: restructure routes */}
                                        {/* <Route path="/" element={<Layout />}>
                                    <Route index element={<Home />} />
                                    <Route path="blogs" element={<Blogs />} />
                                    <Route path="contact" element={<Contact />} />
                                    <Route path="*" element={<NoPage />} />
                                </Route> */}

                                        {/* <Route path='/' */}
                                        <Route path="/contact-us" element={<ContactPage />} />
                                        <Route path="/sign-in" element={<SignIn />} />
                                        <Route path="/sign-up" element={<SignUp />} />
                                        <Route path="/product" element={<Home />} />
                                        <Route path="/admin/all-products" element={<AllProducts />} />
                                        <Route path="/admin/add-product" element={<NewProduct />} />
                                        <Route path="/" element={<Navigate to="/product" />} />
                                    </Routes>
                                </div>
                            </BrowserRouter>
                        </div>
                </MessageProvider>
            </ProductProvider>
        </UserProvider>
    );
}

export default App;
