import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

export default function Product() {
  const [product, setProduct] = useState({});
  const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const { productId } = useParams();
  const navigate = useNavigate();
  

  useEffect(() => {
      axios.get(`http://localhost:3000/products/${productId}`)
      .then(res => setProduct(res.data))
    }, [productId]);

  function showUpdateForm() {
    setIsUpdateFormVisible(prevUpdateForm => !prevUpdateForm)
  };

  const handleUpdate = async(event) => {
    event.preventDefault()
    try {
      const result = await axios.patch(`http://localhost:3000/products/${productId}`, updatedProduct)
      setProduct(result.data)
      setUpdatedProduct({})
      setIsUpdateFormVisible(false)

    } catch(error) {
      console.log(error)
    }
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

  function deleteProduct() {
    // console.log(`deleting product ${productId}`)
    axios.delete(`http://localhost:3000/products/${productId}`)
    .then(navigate("/"))
  }

  const updateDisplay = 
  <div>
    <form className="form" onSubmit={handleUpdate}>
      <input 
        type='text'
        placeholder="name"
        name='name'
        value={updatedProduct.name}
        onChange={handleChange}
      />
      <input 
        type='text'
        placeholder="description"
        name='description'
        value={updatedProduct.description}
        onChange={handleChange}
      />
      <input 
        type='text'
        placeholder="price"
        name='price'
        value={updatedProduct.price}
        onChange={handleChange}
      />
      <input 
        type='text'
        placeholder="image_url"
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
      { !isUpdateFormVisible && <button onClick={showUpdateForm}>Edit</button>}
      <button onClick={deleteProduct}>Delete Product</button>
      {isUpdateFormVisible && updateDisplay}
    </div>
  );
}