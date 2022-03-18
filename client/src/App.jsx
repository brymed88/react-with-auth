import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from "react";

import Head from "./pages/front/parts/Head";
import Foot from "./pages/front/parts/Foot";
import Home from "./pages/front/Home";
import SpinnerComponent from "./components/common/spinner/SpinnerComponent";

import './normalize.min.css';
import './App.min.css';

/*
* Lazy loading to selectively load pages based on usage
*/
const About = lazy(() => import("./pages/front/About"));
const Contact = lazy(() => import("./pages/front/Contact"));
const Login = lazy(() => import("./pages/front/Login"));
const e404 = lazy(() => import("./pages/common/404"));

const Dashboard = lazy(() => import("./pages/dash/Dashboard"));

function App() {
  return (
    <BrowserRouter>

      <Head />

      <div className="page-container">
        <Routes>

          <Route path="/" element={<Home />} exact />
          <Route path="*" element=
            {
              <Suspense fallback={<SpinnerComponent class='full' size='60px' />}>
                <e404 />
              </Suspense>
            } />

          <Route path="/about" element=
            {
              <Suspense fallback={<SpinnerComponent class='full' size='60px' />}>
                <About />
              </Suspense>
            } />

          <Route path="/contact" element=
            {
              <Suspense fallback={<SpinnerComponent class='full' size='60px' />}>
                <Contact />
              </Suspense>
            } />
          <Route path="/login" element=
            {
              <Suspense fallback={<SpinnerComponent class='full' size='60px' />}>
                <Login />
              </Suspense>
            } />
          <Route path="/dashboard" element=
            {
              <Suspense fallback={<SpinnerComponent class='full' size='60px' />}>
                <Dashboard />
              </Suspense>
            } />
        </Routes>
      </div>

      <Foot />

    </BrowserRouter>
  );
}

export default App;
