import { useState } from 'react'
import BasicCard from './ProductCard'
import './App.css'
// import products from './data.jsx'

function App() {
const products = [
  {
    id: 1,
    name: "Ceramic Shield Case",
    price: 49,
    category: "Accessories",
    isNew: true,
    inStock: true,
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1478234170285-53301bcf2461?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNlcmFtaWN8ZW58MHx8MHx8fDI%3D"
  },
  {
    id: 2,
    name: "Admin Headphones with ANC Pro",
    price: 350,
    category: "Audio",
    isNew: false,
    inStock: true,
    discountPrice: 299, // On sale!
    image: "https://images.unsplash.com/photo-1628116709703-c1c9ad550d36?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDI%3D"
  },
  {
    id: 3,
    name: "Fast Charger 20W",
    price: 19,
    category: "Charging",
    isNew: false,
    inStock: false, // Out of stock!
    discountPrice: null,
    image: "https://images.unsplash.com/photo-1603539444875-76e7684265f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcmdlcnxlbnwwfHwwfHx8Mg%3D%3D"
  },
  {
    id: 4,
    name: "Travel Dock",
    price: 89,
    category: "Charging",
    isNew: true,
    inStock: true,
    discountPrice: null,
    image: null // Missing image!
  }
];

;
  return (
    <div className="App">   
      {products.map((product) => (
        <BasicCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
          isNew={product.isNew}
          inStock={product.inStock}
          discountPrice={product.discountPrice}
          image={product.image}
        />
      ))}
   </div>
  )
}

export default App

