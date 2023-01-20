import React from 'react';
import './App.css';
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import NavBar from './NavBar'

function App() {
    
    
    
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