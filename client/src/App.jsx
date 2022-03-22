import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Suspense, lazy } from "react";

import FrontLayout from './layouts/FrontLayout';
import DashLayout from './layouts/DashLayout';

import Home from "./pages/front/Home";
import SpinnerComponent from "./components/common/spinner/SpinnerComponent";
import PrivateRouteComponent from './components/common/privateRoute/PrivateRouteComponent';

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

      <Routes>

        {/* Routes will use FrontLayout which will be different than the user dashboard */}
        <Route element={<FrontLayout />}>

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

        </Route>

        {/* Routes will use DashLayout which will be different than the front pages*/}
        <Route element={<DashLayout />}>
          <Route path="/dashboard" element=
            {

              <Suspense fallback={<SpinnerComponent type="full" size='60px' />}>
                <PrivateRouteComponent >
                  <Dashboard />
                </PrivateRouteComponent>
              </Suspense>

            } />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
