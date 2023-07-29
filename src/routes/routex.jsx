import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Home from "../components/home/Home";
import SingUp from "../components/Singup/SingUp";
import { useEffect, useState } from "react";
import { auth } from "..//firebase";

export const MyRoutes = () => {
  const [userName, setUserName] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route exac path="/" element={<Home name={userName}/>} />
        <Route exac path="/login" element={<Login />} />
        <Route exac path="/singup" element={<SingUp />} />
      </Routes>
    </Router>
  );
};
