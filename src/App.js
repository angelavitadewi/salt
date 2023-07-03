import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';
import { Navbar } from './component/Navbar/Navbar';

function App() {
  return (
    <>
      <HashRouter basename=''>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
