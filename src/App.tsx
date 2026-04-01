import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Topbar from "./Components/Topbar.jsx";
import Loader from "./Components/Loader.jsx";

const Topbar = React.lazy(() => import("./Components/Topbar"));
const Home = React.lazy(() => import("./Components/Home"));
const Features = React.lazy(() => import("./Components/Features"));
const Pricing = React.lazy(() => import("./Components/Pricing"));

function App() {
  return (
    <>
      <BrowserRouter>
      <Topbar />
        <Routes>
          {/* <Route path="/" element={<Topbar />}> */}
            <Route index element={<Suspense fallback={<Loader />}><Home /></Suspense>}/>
            <Route path="features" element={<Suspense fallback={<Loader />}><Features /></Suspense>}/>
            <Route path="pricing" element={<Suspense fallback={<Loader />}><Pricing /></Suspense>}/>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
