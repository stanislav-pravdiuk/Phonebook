import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom/dist";
import { lazy } from "react";

const Home = lazy(() => import('./pages/Home'));

function App() {
  
  return (
    <Routes>
      <Route exact path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
    
  );
};

export default App;