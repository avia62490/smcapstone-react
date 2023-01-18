import React from 'react';
import './App.css';
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'

function App() {
    // const [products, setProducts] = React.useState([])

    // React.useEffect(() => {
    //     fetch("http://localhost:3000/products")
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, []);
    // console.log(products);

    // const productDisplay = products.map(product => {
    //     return(
    //         <div key={product.id}>
    //             <h1 >{product.name}</h1>
    //             <img src={product.image_url} alt=''/>
    //             <h4>Price: ${product.price}</h4>
    //             <hr/>
    //         </div>
    //     )
    // });
    // return (
    //     <div className="App">
    //         {productDisplay}
    //     </div>
    // );
    return(
        <div className='App'>
            <NavBar />
            <Routes>
                <Route path ="/" element={<Home />} />
                <Route path ="/about" element={<About />} />
                <Route path ="/contact" element={<Contact />} />
                <Route path ="/blog" element={<Blog />} />
            </Routes>
        </div>
    )
}

export default App;