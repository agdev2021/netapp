import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <header>
          <h1>Coffee Discovery App</h1>
          <p className="subtitle">Find your perfect coffee match with AI</p>
        </header>
        
        <main>
          <div className="card">
            <h2>Welcome to our Coffee App</h2>
            <p>
              We use AI to help you discover coffee products that match your preferences.
              Whether you're looking for a bold espresso or a smooth light roast, we've got you covered.
            </p>
            
            <div className="counter-section">
              <p>Coffee enthusiasm level: {count}</p>
              <button onClick={() => setCount((count) => count + 1)}>
                Increase ☕
              </button>
            </div>
          </div>
          
          <div className="features">
            <div className="feature">
              <h3>AI-Powered Recommendations</h3>
              <p>Our AI analyzes your preferences to find the perfect coffee match.</p>
            </div>
            <div className="feature">
              <h3>Curated Selection</h3>
              <p>Browse our handpicked collection of premium coffee products.</p>
            </div>
            <div className="feature">
              <h3>Merchant Platform</h3>
              <p>Coffee sellers can showcase their unique products to coffee enthusiasts.</p>
            </div>
          </div>
        </main>
        
        <footer>
          <p>&copy; 2025 Coffee Discovery App | Built with React & Vite</p>
        </footer>
      </div>
    </>
  )
}

export default App
