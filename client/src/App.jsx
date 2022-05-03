import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import FrontLayout from './layouts/front/FrontLayout';
import DashLayout from './layouts/dash/DashLayout';

import Home from './pages/front/Home';

import SpinnerComponent from './components/common/spinner/SpinnerComponent';
import PrivateRouteComponent from './components/common/privateRoute/PrivateRouteComponent';

/* Lazy loading to selectively load pages based on usage */

//Front end pages
const About = lazy(() => import('./pages/front/About'));
const Contact = lazy(() => import('./pages/front/Contact'));
const Login = lazy(() => import('./pages/front/Login'));
const Error = lazy(() => import('./pages/front/Error'));
const Privacy = lazy(() => import('./pages/front/Privacy'));

//Dashboard pages
const Account = lazy(() => import('./pages/dash/Account'));
const Dashboard = lazy(() => import('./pages/dash/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes will use FrontLayout which will be different than the user dashboard */}
        <Route element={<FrontLayout />}>
          <Route path='/' element={<Home />} exact />
          <Route
            path='*'
            element={
              <Suspense fallback={<SpinnerComponent type='full' size='60px' />}>
                <Error />
              </Suspense>
            }
          />

          <Route
            path='/about'
            element={
              <Suspense fallback={<SpinnerComponent type='full' size='60px' />}>
                <About />
              </Suspense>
            }
          />

          <Route
            path='/contact'
            element={
              <Suspense fallback={<SpinnerComponent type='full' size='60px' />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path='/login'
            element={
              <Suspense fallback={<SpinnerComponent type='full' size='60px' />}>
                <Login />
              </Suspense>
            }
          />

          <Route
            path='/privacy'
            element={
              <Suspense fallback={<SpinnerComponent type='full' size='60px' />}>
                <Privacy />
              </Suspense>
            }
          />
        </Route>

        {/* Routes will use DashLayout which will be different than the front pages*/}
        <Route element={<DashLayout />}>
          <Route
            path='/dashboard'
            element={
              <PrivateRouteComponent>
                <Suspense
                  fallback={<SpinnerComponent type='full' size='60px' />}>
                  <Dashboard />
                </Suspense>
              </PrivateRouteComponent>
            }
          />

          <Route
            path='/dashboard/account'
            element={
              <PrivateRouteComponent>
                <Suspense
                  fallback={<SpinnerComponent type='full' size='60px' />}>
                  <Account />
                </Suspense>
              </PrivateRouteComponent>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
