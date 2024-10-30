import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import HomeWrapper from './pages/HomeWrapper';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
