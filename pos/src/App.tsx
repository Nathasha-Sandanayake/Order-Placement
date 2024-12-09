import {BrowserRouter as Routers,Routes,Route,Link, Router} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Customer from './components/Customer'
import Product from './components/Product'
import Order from './components/Order'

function App() {
  
  return(
  <Routers>
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="navbar-brand">
      <img src="https://w1.pngwing.com/pngs/621/663/png-transparent-love-background-heart-wattpad-book-publishing-reading-book-covers-ebook-romance-thumbnail.png" alt="" className='logo'/> 
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/customer'>Customers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/order'>Order Management</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/product'>Products</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      
     
     <Routes> 
    
          <Route path='/' element={<Home/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/order' element={<Order/>}/>
      
     </Routes>

    </div>
  </Routers>
  )
}

export default App
