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
const Error = lazy(() => import("./pages/common/Error"));

//TODO implemenent JWT verication before allowing access to dashboard, else redirect to home page.
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
              <Suspense fallback={<SpinnerComponent type="full" size='60px' />}>
                <Error />
              </Suspense>
            } />

          <Route path="/about" element=
            {
              <Suspense fallback={<SpinnerComponent type="full" size='60px' />}>
                <About />
              </Suspense>
            } />

          <Route path="/contact" element=
            {
              <Suspense fallback={<SpinnerComponent type="full" size='60px' />}>
                <Contact />
              </Suspense>
            } />
          <Route path="/login" element=
            {
              <Suspense fallback={<SpinnerComponent type="full" size='60px' />}>
                <Login />
              </Suspense>
            } />
          <Route path="/dashboard" element=
            {
              <Suspense fallback={<SpinnerComponent type="full" size='60px' />}>
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
