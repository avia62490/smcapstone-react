import React, {useState} from 'react'

export default function Create() {
  const [newProduct, setNewProduct] = useState(
    {name: "",
    description: "",
    price: "",
    image_url: ""
  });

  function handleChange(event) {
    // console.log(event)
    const {name, value} = event.target
      setNewProduct(prevNewProduct => {
          return {
            ...prevNewProduct,
            [name] : value
          }
      }
    );
  };
  console.log(newProduct)

  function handleSubmit(event) {
    event.preventDefault()
    console.log(`New Product "${newProduct.name}" created`)
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