import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/basket/Basket';
import Categori from './components/categori/Categori';
import Main from './components/main/Main';
import ProductId from './components/productId/ProductId';
import menu from './hoc/menu';
import HomeWrapper from './pages/HomeWrapper';
export const showContext = createContext()


function App({ show, toggleShow }) {

  return (
    <div
      className="App">
      <showContext.Provider value={{ show, toggleShow }} >
        <Routes>
          <Route path='/' element={<HomeWrapper />}>
            <Route index element={<Main />} />
            <Route path='categori/:id' element={<Categori />} />
            <Route path='product-id/:id' element={<ProductId />} />
            <Route path='cart' element={<Basket />} />
          </Route>
        </Routes>
      </showContext.Provider>
    </div>
  );
}

export default menu(App);
