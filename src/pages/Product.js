import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Product() {
  let { state } = useLocation();
  const [product, setProduct] = useState({})

  useEffect(() => {
      axios.get(`http://localhost:3000/products/${state.productId}`)
      .then(res => setProduct(res.data))
    }, [state.productId]);
    
  return(
    <div className="product">
      <h1>{product.name}</h1>
      <img src={product.image_url} alt='' width='500px'/>
      <h5>{product.description}</h5>
      <h4>${product.price}</h4>
    </div>
  );
}