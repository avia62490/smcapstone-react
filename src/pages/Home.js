import React from 'react'
import Product from './Product'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    console.log(products);

    const productDisplay = products.map(product => {
        return(
          
          <div key={product.id}>
              <h1 >{product.name}</h1>
              <img src={product.image_url} alt=''/>
              <h4>Price: ${product.price}</h4>
              <Link 
                to={`/products/${product.id}`} 
                state={{ productId: product.id }} 
                element={<Product />}
              >
                  Product info
              </Link>
              <hr/>
          </div>
        )
    });
  return(
    <div className="App">
        {productDisplay}
    </div>
  )
}