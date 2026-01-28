import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={sideStyle}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/products">Products</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/forecast">Forecast</Link>
      <Link to="/reports">Reports</Link>
    </div>
  );
}

const sideStyle = {
  width: "200px",
  background: "#e5e7eb",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "12px"
};
