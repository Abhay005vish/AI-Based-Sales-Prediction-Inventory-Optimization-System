import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Forecast from "./pages/Forecast";
import Reports from "./pages/Reports";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/forecast" element={<Forecast />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}
