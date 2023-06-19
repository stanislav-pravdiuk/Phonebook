import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom/dist';
import { lazy } from 'react';
import { RestrictedRoute } from '../restrictedRoute/restrictedRoute';
import { PrivateRoute } from '../privateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';

const Phonebook = lazy(() => import('./pages/Phonebook'));
const SignUp = lazy(() => import('./pages/SignUpPage'));
const SignIn = lazy(() => import('./pages/SignInPage'));
const UserMenu = lazy(() => import('./pages/UserMenu'));

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Phonebook />} />
        <Route path='/login'
              element={<RestrictedRoute component={<SignIn />} redirectTo='/contacts' />}
        />
        <Route path='/register'
              element={<RestrictedRoute component={<SignUp />} redirectTo='/contacts' />}
        />
        <Route path='/contacts'
              element={<PrivateRoute component={<Phonebook />} redirectTo='/login' />}
        />
        <Route path='/profile'
              element={<PrivateRoute component={<UserMenu />} redirectTo='/login' />}
        />
        <Route path='*'
              element={<div>Not found...</div>}
        />
      </Route>
    </Routes>
  );
};

export default App;