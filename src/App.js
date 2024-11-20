import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categori from './components/categori/Categori';
import Main from './components/main/Main';
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
            <Route path='categori' element={<Categori />} />
          </Route>
        </Routes>
      </showContext.Provider>
    </div>
  );
}

export default menu(App);
