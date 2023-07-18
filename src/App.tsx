import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import { MessageProvider } from './contexts/MessageProvider';
import MyNavbar from './components/MyNavbar'
import StackJamColors from './theme/stackJamColors'
import AboutUs from './pages/About'
// import ContactPage from './pages/ContactPage'


function App() {
    return (
            <MessageProvider>

                <div style={{
                    backgroundColor: StackJamColors.red,
                    color: StackJamColors.white
                }}>
                    <BrowserRouter>
                        <MyNavbar />
                        <div style={{ padding: 70 }}>
                            <Routes>
                                <Route path="/about-us" element={<AboutUs />} />
                                {/* <Route path="/contact-us" element={<ContactPage />} /> */}
                                <Route path="/home" element={<Home />} />
                                <Route path="/" element={<Navigate to="/home" />} />
                            </Routes>
                        </div>
                    </BrowserRouter>
                </div>
            </MessageProvider>
    );
}

export default App;
