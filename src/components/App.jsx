import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom/dist";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import GetStarted from "./getStarted/GetStarted";
import PublicRoute from "./publicRoute/PublicRoute";
import PrivateRoute from "./privateRoute/PrivateRoute";

const Phonebook = lazy(() => import('./pages/Phonebook'));
const SignUp = lazy(() => import('./pages/SignUpPage'));
const SignIn = lazy(() => import('./pages/SignInPage'));

function App() {

  const isAuth = useSelector(state => state.auth.token);
  
  return (
    <Routes>

      <Route exact path='/' element={<Layout />}>
        <Route index element={isAuth
          ? <PrivateRoute><Phonebook/></PrivateRoute>
          : <GetStarted/>
          } />
        
        <Route path='SignUp' element={<Suspense>
          <PublicRoute>
            <SignUp/>
          </PublicRoute>          
        </Suspense>} />

        <Route path='SignIn' element={<Suspense>
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        </Suspense>} />
      </Route>

    </Routes>
    
  );
};

export default App;