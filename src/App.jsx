import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/home"
import Register from "./pages/register"
import Login from "./pages/login"
import Layout from "./layout/layout"
import Developers from "./pages/developer"
import Posts from "./pages/posts"
import Dashboard from "./pages/dashboard"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="developer" element={<Developers/>}/> 
        <Route path="posts" element={<Posts/>}/> 
        <Route path="dashboard" element={<Dashboard/>}/> 
        <Route path="register" element={<Register/>}/> 
        <Route path="login" element={<Login/>}/> 
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App