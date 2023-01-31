import React, {useEffect, useState} from 'react'
import { Routes, Route, useParams, useLocation } from 'react-router-dom';

export default function Product() {
  let { state } = useLocation();
  // const [productId, setProductId] = useState(state.productId)
  const [product, setProduct] = useState({})
  

  

    useEffect(() => {
        fetch(`http://localhost:3000/products/${state.productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
      }, [state.productId]);
      
      console.log(product);
    // const productDisplay = product.map(product => {
    //     return(
    //         <div key={product.id}>
    //             <h1 >{product.name}</h1>
    //             <img src={product.image_url} alt=''/>
    //             <h4>Price: ${product.price}</h4>
    //             <h4>THIS IS A PRODUCT</h4>
    //             <hr/>
    //         </div>
    //     )
    // });
  return(
    <div className="App">
        <h1>THIS IS A PRODUCT</h1>
        {product.name}
        {/* {productDisplay} */}
    </div>
  )
}