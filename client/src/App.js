import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Head from "./pages/Head";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Foot from "./pages/Foot";

function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Foot />
    </BrowserRouter>
  );
}

export default App;
