import React, {useState} from 'react'
import axios from 'axios'

export default function Create() {
  const [newProduct, setNewProduct] = useState(
    {name: "",
    description: "",
    price: "",
    image_url: ""
  });

  function handleChange(event) {
    const {name, value} = event.target
      setNewProduct(prevNewProduct => {
          return {
            ...prevNewProduct,
            [name] : value
          }
      }
    );
  };

  function handleSubmit(event) {
    event.preventDefault()
    console.log(`New Product "${newProduct.name}" created`)
    axios.post("http://localhost:3000/products", newProduct)
      .then(res => console.log(res.data))
  };

  return(
    <div>
      <h1>Create New Product</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input 
          type='text'
          placeholder='Product Name'
          name='name'
          value={newProduct.name}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder='Product Description'
          name='description'
          value={newProduct.description}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder='Product Price'
          name='price'
          value={newProduct.price}
          onChange={handleChange}
        />
        <input 
          type='text'
          placeholder='Product Image'
          name='image_url'
          value={newProduct.image_url}
          onChange={handleChange}
        />
        <button>Create</button>
      </form>
    </div>
  )
}