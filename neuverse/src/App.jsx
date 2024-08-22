import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/blocks/Navbar';
import Footer from './components/blocks/Footer';
import Home from "./pages/Home"
import About from "./pages/About"
import Prices from "./pages/Prices"
import NeoPrices from './pages/NeoPrices';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Prices" element={<NeoPrices />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}