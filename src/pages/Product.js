import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';

export default function Product() {
  let { state } = useLocation();
  const [product, setProduct] = useState({})
  const [updateForm, setUpdateForm] = useState(false)
  const [updatedProduct, setUpdatedProduct] = useState({})

  useEffect(() => {
      axios.get(`http://localhost:3000/products/${state.productId}`)
      .then(res => setProduct(res.data))
    }, [state.productId]);

  function showUpdateForm() {
    setUpdateForm(prevUpdateForm => !prevUpdateForm)
  };

  function handleUpdate() {
    axios.patch(`http://localhost:3000/products/${state.productId}`, updatedProduct)
  };

  function handleChange(event) {
    const {name, value} = event.target
      setUpdatedProduct(prevUpdatedProduct => {
          return {
            ...prevUpdatedProduct,
            [name] : value
          }
      }
    );
  };

  const updateDisplay = 
  <div>
    <form className="form" onSubmit={handleUpdate}>
      <input 
        type='text'
        placeholder={product.name}
        name='name'
        value={updatedProduct.name}
        onChange={handleChange}
      />
      <input 
        type='text'
        placeholder={product.description}
        name='description'
        value={updatedProduct.description}
        onChange={handleChange}
      />
      <input 
        type='text'
        placeholder={product.price}
        name='price'
        value={updatedProduct.price}
        onChange={handleChange}
      />
      <input 
        type='text'
        placeholder={product.image_url}
        name='image_url'
        value={updatedProduct.image_url}
        onChange={handleChange}
      />
      <br/>
      <button>Save Changes</button>
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