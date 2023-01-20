import React from 'react'

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
                {/* <button ><a href="http://localhost:3000/products/1"></a>Click</button> */}
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