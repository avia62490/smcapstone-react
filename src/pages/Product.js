import React, {useEffect, useState} from 'react'
import { Routes, Route, useParams, useLocation } from 'react-router-dom';

export default function Product() {
  let { state } = useLocation();
  const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/products/${state.productId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
      }, [state.productId]);
      
      console.log(product);
    
  return(
    <div className="product">
        <h1>{product.name}</h1>
        <img src={product.image_url} alt='' width='500px'/>
        <h5>{product.description}</h5>
        <h4>{product.formatted.price}</h4>

    </div>
  )
}