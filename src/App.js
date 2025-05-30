import './css/index.css'
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HeroBanner from "./components/HeroBanner";
import Stats from "./components/Stats";
import WhatWeOffer from "./components/WhatWeOffer";
import ProductGallery from "./components/ProductGallery";
import { CartProvider } from './components/CartContext';

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Header />
                <main>
                <HeroBanner />
                    <div className="container">
          <Stats />
          <WhatWeOffer />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/detail/:id" element={<Detail />} />
                            <Route path="/notfound" element={<NotFound />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
          <ProductGallery />
                </main>
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;