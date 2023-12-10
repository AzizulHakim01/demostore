import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import Everything from "./pages/Everything"
import SingleProduct from "./pages/SingleProduct"
function App() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Homepage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/store" element={<Everything />}/>
        <Route path="/single/:id" element={<SingleProduct />}/>
      </Routes>
    </>
  )
}

export default App
