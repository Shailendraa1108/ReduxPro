import logo from './logo.svg';
import './App.css';
import "./Style/App.scss"
import { Toaster } from "react-hot-toast"

import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import Header from './Components/Header';
import Cart from './Components/Cart';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/signup'  element={<SignUp/>}/>
    
    </Routes>
    <Toaster/>
    {/* <Footer/> */}
    </BrowserRouter>
 
  );
}

export default App;
