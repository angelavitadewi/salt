import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';
import { About } from './page/About';
import { Navbar } from './component/Navbar/Navbar';

function App() {
  return (
    <>
      <HashRouter basename=''>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
