import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import MainBoard from "./pages/MainBoardIPO";
import AddIPOForm from "./components/AddIPOForm";
import EditIPOForm from "./pages/EditIPOForm";
import ViewIPO from "./pages/ViewIPO";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/manage-ipo" element={<MainBoard />} />
      <Route path="/add-ipo" element={<AddIPOForm />} />
      <Route path="/edit-ipo/:id" element={<EditIPOForm />} />

      <Route path="/view-ipo/:id" element={<ViewIPO />} />
    </Routes>
  );
};

export default App;
