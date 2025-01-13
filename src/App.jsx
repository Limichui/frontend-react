import './App.css'
import Home  from './screens/Home.jsx'
import { Counter } from "./components/counter/Counter.jsx"
import Product from "./screens/Product.jsx"

function App() {
  return (
    <>
        <Home />
        <Counter />
        <Product />
    </>
  )
}

export default App;