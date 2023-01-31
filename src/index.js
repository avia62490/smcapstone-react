import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from "./pages/Product"
// import {About, Blog, Contact, Home, Product} from "./pages/"
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <NavBar />
      <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/about" element={<About />} />
          <Route path ="/contact" element={<Contact />} />
          <Route path ="/blog" element={<Blog />} />
          <Route path ="/products/1" element={<Product/>} />
          <Route path ="/products/2" element={<Product/>} />
      </Routes>
      {/* <App /> */}
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
