import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Everything from "./pages/Everything"
import SingleProduct from "./pages/SingleProduct"
import Cart from "./components/Cart"
import Women from "./components/Women"
import Men from "./components/Men"
import Accessories from "./components/Accessories"
function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Homepage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/store" element={<Everything />}/>
        <Route path="/single/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/women" element={<Women />}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/accessories" element={<Accessories />}/>
      </Routes>
    </>
  )
}

export default App
