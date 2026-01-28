export default function Navbar() {
  return (
    <div style={navStyle}>
      <h3>Multi-Tenant E-commerce System</h3>
      <span>Store: Demo Store</span>
    </div>
  );
}

const navStyle = {
  background: "#0f172a",
  color: "white",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "space-between"
};
