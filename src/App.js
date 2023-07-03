import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './page/Home';
import { Navbar } from './component/Navbar/Navbar';
import { Footer } from './component/Footer/Footer';

function App() {
  return (
    <>
      <HashRouter basename=''>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
