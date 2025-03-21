import { Outlet } from "react-router-dom"
import Header from "../components/header"
import { useContext } from "react"
import { AppContext } from "../context/context"

function Layout() {
   const {heroColor } = useContext(AppContext)
  return (
    <div>
        <Header/>
        <div style={{backgroundColor: heroColor}} className="w-full h-[100vh]">
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout