import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import './index.css'

function App() {
  const [products, setProducts] = useState([])
   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://virtual-assistant-backend-wott.onrender.com/api/products"
        );
        // const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log("Fetched products: ", data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
    console.log("Fetched products: ", products);
  }, []);


  return (
   <div>
    <Header/>
      <Home products={products} />
    <Footer/>
   </div>
  )
}

export default App
