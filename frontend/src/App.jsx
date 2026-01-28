// ...existing code...
import { useState } from 'react'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const products = [
    { id: 1, name: 'Product One', price: '$19.99', desc: 'Sample description' },
    { id: 2, name: 'Product Two', price: '$29.99', desc: 'Sample description' }
  ]

  function toggleLogin() {
    setLoggedIn(v => !v)
  }

  function addToCart(e, product) {
    e.stopPropagation()
    alert(`Added ${product.name} to cart`)
  }

  function openDetails(product) {
    alert(`${product.name} - ${product.price}`)
  }

  return (
    <>
      <header>
        <div className="navbar">
          <div className="logo">My Online Store</div>
          <nav className="nav-links">
            <a href="#">Home</a>
            <button id="loginBtn" type="button" onClick={toggleLogin}>
              {loggedIn ? 'Logout' : 'Login'}
            </button>
          </nav>
        </div>
      </header>

      <main>
        {!loggedIn ? (
          <section className="coming-soon">
            Coming Soon 🚀
            <br />
            Login to view and purchase products
          </section>
        ) : (
          <section id="products" className="product-grid">
            {Array.from({ length: 12 }).map((_, i) => {
              const p = products[i % products.length]
              return (
                <div key={i} className="product-card" onClick={() => openDetails(p)}>
                  <div className="product-image">Image</div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <div className="price">{p.price}</div>
                  <button
                    type="button"
                    className="btn"
                    onClick={(e) => addToCart(e, p)}
                  >
                    Add to Cart
                  </button>
                </div>
              )
            })}
          </section>
        )}
      </main>

      <footer>© 2026 My Online Store. All rights reserved.</footer>
    </>
  )
}

export default App
// ...existing code...