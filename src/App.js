import axios from 'axios'
import './App.css';

function App() {
  function getData() {
    axios.get("http://localhost:3001/products").then(response => {
      console.log(response.data)
    })
    // console.log("clicked")
  }
  return (
    <div className="App">
      <button onClick={getData}>Click me</button>
    </div>
  );
}

export default App;
