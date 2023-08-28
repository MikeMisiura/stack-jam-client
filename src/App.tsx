import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import MyNavbar from './components/MyNavbar'
import StackJamColors from './theme/stackJamColors'
import { Col, Container } from 'react-bootstrap'
import AboutUs from './pages/About'
import Footer from './components/Footer'


function App() {
    return (
        <>
            <MyNavbar />
            <Container>
                <Col sm={3} md={4} lg={6}></Col>
                <Col>

                    <div style={{
                        backgroundColor: StackJamColors.maroon,
                        color: StackJamColors.white
                    }}>
                        <BrowserRouter>
                            {/* <div style={{ padding: 70 }}> */}
                            <Routes>
                                <Route path="/about-us" element={<AboutUs />} />
                                {/* <Route path="/contact-us" element={<ContactPage />} /> */}
                                <Route path="/home" element={<Home />} />
                                <Route path="/" element={<Navigate to="/home" />} />
                            </Routes>
                            {/* </div> */}
                        </BrowserRouter>
                    </div>
                </Col>
                <Col sm={3} md={4} lg={6}></Col>
            </Container>
            <Footer />
        </>
    );
}

export default App;
