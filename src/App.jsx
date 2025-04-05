import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,  } from "react-router-dom"
import Home from "./pages/home"
import Register from "./pages/register"
import Login from "./pages/login"
import Layout from "./layout/layout"
import Developers from "./pages/developer"
import Posts from "./pages/posts"
import Dashboard from "./pages/dashboard"
import DeveloperDetails from "./pages/developer-detail"
import NotFound from "./pages/not-found"
import { useContext, useEffect } from "react"
import { AppContext } from "./context/context"
import PostDetails from "./pages/discussion"
import PropTypes from "prop-types"
import CreateProfile from "./pages/create-profile"
import EditProfile from "./pages/edit-profile"
import AddExperience from "./pages/add-experience"
import AddEducation from "./pages/add-education"

App.propTypes = {
  children: PropTypes.node.isRequired
}
function App() {
  const {setLogin  } = useContext(AppContext)

  const isAuth = () => {
    return localStorage.getItem('token') != null
  }
  function ProtectedRoute({children}) {
    const auth = isAuth()

    useEffect(() => {
      if (auth) {
        setLogin(true)
      }
    }, [auth, children])
    if(auth) {
      return children;
    } else {
      return <NotFound/>
    }
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
        <Route path="create-profile" element={<CreateProfile/>}/> 
        <Route path="edit-profile" element={<EditProfile/>}/> 
        <Route path="add-experience" element={<AddExperience/>}/> 
        <Route path="add-education" element={<AddEducation/>}/> 
        <Route path="*" element={<NotFound/>}/> 
        <Route path="posts/:id" element={<PostDetails/>}/> 
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