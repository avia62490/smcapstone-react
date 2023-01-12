// import axios from 'axios'
import React from 'react';
import './App.css';

function App() {
  // function getData() {
  //   axios.get("http://localhost:3001/products").then(response => {
  //     console.log(response.data)
  //   })
  //   // console.log("clicked")
  // }

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:3001/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  console.log(products)

  const productDisplay = products.map(product => {
    return(
      <h1 key={product.id}>{product.name}</h1>
    )
  })
  return (
    <div className="App">
      {productDisplay}
    </div>
  );
}

export default App;
