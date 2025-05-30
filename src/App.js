import './css/index.css'
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Header />
                <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/detail/:id" element={<Detail />} />
                            <Route path="/notfound" element={<NotFound />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                </main>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;