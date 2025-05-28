import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <NotFound /> 
      {/* above line is just for testing */}
    </>
  );
}

export default App;
