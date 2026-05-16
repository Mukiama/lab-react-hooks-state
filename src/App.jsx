import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Implement state for dark mode toggle
    const [isDarkMode, setIsDarkMode] = useState(false)
  // Implement state for cart management
    const [cart, setCart] = useState([])
   
  // Implement state for category filtering
      const [category, setCategory] = useState("")
       const addToCart = (product) => {
      setCart((prevCart) => [...prevCart, product])
    }
    function handleDarkModeClick() {
      setIsDarkMode((isDarkMode) => !isDarkMode);
    }
  return (
    <div className={"App" + (isDarkMode ? "dark" : "light")}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
          
      <DarkModeToggle isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick}/>
          

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList  addToCart={addToCart} category={category}/>
      <Cart cart={cart}/>
      {/* Implement and render Cart component */}
    </div>
  )
}

export default App
