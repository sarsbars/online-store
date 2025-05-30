import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='*' element={<NotFound />} /> 
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;