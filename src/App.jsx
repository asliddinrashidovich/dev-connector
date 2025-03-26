import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider,  } from "react-router-dom"
import Home from "./pages/home"
import Register from "./pages/register"
import Login from "./pages/login"
import Layout from "./layout/layout"
import Developers from "./pages/developer"
import Posts from "./pages/posts"
import Dashboard from "./pages/dashboard"
import DeveloperDetails from "./pages/developer-detail"
import NotFound from "./pages/not-found"

function App() {
  // const navigate = useNavigate();

  const isAuth = () => {
    return localStorage.getItem('token') !== null
  }
  function ProtectedRoute({children}) {
    return isAuth() ? children : <Navigate to={'/register'}/>  
  }
  
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="developer" element={<Developers/>}/> 
        <Route path="posts" element={<ProtectedRoute> <Posts/></ProtectedRoute>}/> 
        <Route path="dashboard" element={<ProtectedRoute> <Dashboard/></ProtectedRoute>}/> 
        <Route path="developer/:id" element={<DeveloperDetails/>}/> 
        <Route path="register" element={<Register/>}/> 
        <Route path="*" element={<NotFound/>}/> 
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