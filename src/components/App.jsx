import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom/dist";
import { lazy, Suspense } from "react";

const Phonebook = lazy(() => import('./pages/Phonebook'));
const SignUp = lazy(() => import('./pages/SignUpPage'));
const SignIn = lazy(() => import('./pages/SignInPage'));

function App() {
  
  return (
    <Routes>
      <Route exact path='/' element={<Layout />}>
        <Route index element={<Phonebook />} />
        <Route path='SignUp' element={<Suspense>
          <SignUp/>
        </Suspense>} />
                <Route path='SignIn' element={<Suspense>
          <SignIn/>
        </Suspense>} />
      </Route>
    </Routes>
    
  );
};

export default App;