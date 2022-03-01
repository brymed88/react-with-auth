import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from "react";

import Head from "./pages/parts/Head";
import Foot from "./pages/parts/Foot";
import Home from "./pages/Home";
import SpinnerComponent from "./components/SpinnerComponent";

/*
* Lazy loading to selectively load pages based on usage
*/
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Error = lazy(() => import("./pages/parts/Error"));


function App() {
  return (
    <BrowserRouter>

      <Head />

      <div className="page-container">
        <Routes>

          <Route path="/" element={<Home />} exact />
          <Route path="*" element=
            {
              <Suspense fallback={<SpinnerComponent class='full' size='60px'/>}>
                <Error />
              </Suspense>
            } />

          <Route path="/about" element=
            {
              <Suspense fallback={<SpinnerComponent class='full' size='60px'/>}>
                <About />
              </Suspense>
            } />

          <Route path="/contact" element=
            {
              <Suspense fallback={<SpinnerComponent class='full' size='60px'/>}>
                <Contact />
              </Suspense>
            } />
          <Route path="/login" element=
            {
              <Suspense fallback={<SpinnerComponent class='full' size='60px'/>}>
                <Login />
              </Suspense>
            } />

        </Routes>
      </div>

      <Foot />

    </BrowserRouter>
  );
}

export default App;
