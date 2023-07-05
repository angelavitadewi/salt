import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';
import { Navbar } from './component/Navbar/Navbar';
import { Footer } from './component/Footer/Footer';
import { useRef } from 'react';

function App() {
  const sliderRef = useRef();
  const valueRef = useRef();
  const perkRef = useRef();
  return (
    <>
      <HashRouter basename=''>
        <Navbar />
        <Routes>
          <Route index element={<Home sliderRef={sliderRef} valueRef={valueRef} perkRef={perkRef} />} />
        </Routes>
        <Footer sliderRef={sliderRef} valueRef={valueRef} perkRef={perkRef} />
      </HashRouter>
    </>
  );
}

export default App;
