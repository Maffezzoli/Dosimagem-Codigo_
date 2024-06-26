
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Servicos from "./pages/Servicos";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import DadosConta from "./pages/DadosConta";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Conta from "./pages/Conta";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/servicos" element={<Servicos/>} />
        <Route path="/conta" element={<Conta/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/dadosconta" element={<DadosConta/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
