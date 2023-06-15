import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom/dist";
import { lazy, Suspense } from "react";
import PublicRoute from "../publicRoute/PublicRoute";
import PrivateRoute from "../privateRoute/PrivateRoute";

const Phonebook = lazy(() => import('./pages/Phonebook'));
const SignUp = lazy(() => import('./pages/SignUpPage'));
const SignIn = lazy(() => import('./pages/SignInPage'));
const UserMenu = lazy(() => import('./pages/UserMenu'))

function App() {
  
  return (
    <Routes>

      <Route path='profile' element={
        <Suspense>
          <PrivateRoute>
            <UserMenu />
          </PrivateRoute>
        </Suspense>} />
      
      <Route exact path='/' element={<Layout />}>

        <Route index element={
          <Suspense>
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          </Suspense>} />

        <Route path='register' element={
          <Suspense>
            <PublicRoute>
              <SignUp/>
            </PublicRoute>          
          </Suspense>} />

        <Route path='login' element={
          <Suspense>
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          </Suspense>} />
        </Route>

    </Routes>
    
  );
};

export default App;