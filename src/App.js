import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Baru from "./pages/New/Baru";
import New2 from "./pages/New2/New2";
import Single from "./pages/single/Single";
import Single2 from "./pages/single2/Single2";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="users">
          <Route path=":usersId" element={<Single />} />
          <Route path="new" element={<Baru />} />
        </Route>
        <Route path="products">
          <Route path=":productsId" element={<Single2 />} />
          <Route path="new" element={<New2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
