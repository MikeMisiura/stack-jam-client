import { Route, BrowserRouter, Routes, Link, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import NewProduct from './pages/NewProduct'
import { ProductProvider } from './contexts/ProductProvider';
import { UserProvider } from './contexts/UserProvider';
import MyNavbar from './components/MyNavbar'
import Admin from './components/Admin'
import AdminNavbar from './components/AdminNavbar'
import StackJamColors from './theme/stackJamColors'
import AboutUs from './pages/About'
// import styles from './styling/app.modules.css'; 


function App() {
    return (
        <UserProvider>
            <ProductProvider>

                <div style={{
                    backgroundColor: StackJamColors.red, 
                    color: StackJamColors.white
                }}>
                    <BrowserRouter>
                        <MyNavbar />
                        <div style={{ padding: 70 }}>
                            <Routes>

                                {/* <Route path="/" element={<Layout />}>
                                    <Route index element={<Home />} />
                                    <Route path="blogs" element={<Blogs />} />
                                    <Route path="contact" element={<Contact />} />
                                    <Route path="*" element={<NoPage />} />
                                </Route> */}

                                {/* <Route path='/' */}
                                <Route path="/about-us" element={<AboutUs />} />
                                <Route path="/sign-in" element={<SignIn />} />
                                <Route path="/sign-up" element={<SignUp />} />
                                <Route path="/product" element={<Home />} />
                                    <Route path="/admin/add-product" element={<NewProduct />} />
                                <Route path="/admin" element={<AdminNavbar />} >

                                </Route>
                                <Route path="/" element={<Navigate to="/product" />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
                </div>
            </ProductProvider>
        </UserProvider>
    );
}

export default App;
