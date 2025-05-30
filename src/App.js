import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import { Routes, Route } from 'react-router-dom';
import HeroBanner from "./components/HeroBanner";
import Stats from "./components/Stats";
import WhatWeOffer from "./components/WhatWeOffer";
import ProductGallery from "./components/ProductGallery";
import ContactForm from "./components/ContactForm";


function App() {
  return (
    <>
      <Header />
      <main>
          <HeroBanner />
        <div className="container">
          <Stats />
          <WhatWeOffer />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/detail' element={<Detail />} />
            <Route exact path='/notfound' element={<NotFound />} />
          </Routes>
        </div>
          <ProductGallery />
          <ContactForm />
      </main>
    </>
  );
}

export default App;
