import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Product() {
  let { state } = useLocation();
  const [product, setProduct] = useState({})
  const [updateForm, setUpdateForm] = useState(false)

  useEffect(() => {
      axios.get(`http://localhost:3000/products/${state.productId}`)
      .then(res => setProduct(res.data))
    }, [state.productId]);

  function showUpdateForm() {
    setUpdateForm(prevUpdateForm => !prevUpdateForm)
  };

  const updateDisplay = 
  <div>
    <form>
    <input 
          type='text'
          placeholder='Product Name'
          name='name'
          // value={newProduct.name}
          // onChange={handleChange}
        />
        <input 
          type='text'
          placeholder='Product Description'
          name='description'
          // value={newProduct.description}
          // onChange={handleChange}
        />
        <input 
          type='text'
          placeholder='Product Price'
          name='price'
          // value={newProduct.price}
          // onChange={handleChange}
        />
        <input 
          type='text'
          placeholder='Product Image'
          name='image_url'
          // value={newProduct.image_url}
          // onChange={handleChange}
        />
        <br/>
        <button>Create</button>
    </form>
  </div>
    
  return(
    <div className="product">
      <h1>{product.name}</h1>
      <img src={product.image_url} alt='' width='500px'/>
      <h5>{product.description}</h5>
      <h4>${product.price}</h4>
      <button onClick={showUpdateForm}>Update</button>
      {updateForm && updateDisplay}
    </div>
  );
}