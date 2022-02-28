import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Head from "./pages/parts/Head";
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Login from "./pages/Login";
import Error from "./pages/parts/Error";
import Foot from "./pages/parts/Foot";

function App() {
  return (
    <BrowserRouter>

      <Head />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Foot />

    </BrowserRouter>
  );
}

export default App;
