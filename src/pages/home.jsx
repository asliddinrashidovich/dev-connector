import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../context/context"

function Home() {
    const {headerText, headerParagraph,signupText, loginText} = useContext(AppContext)
  return (
    <div className="w-full h-[100vh] flex justify-center overflow-hidden items-center relative">
        <div className="text-center z-10 text-white">
            <h1 className="text-[70px] font-[600] mb-[20px]">{headerText}</h1>
            <p className="text-[24px] mb-[20px]">{headerParagraph}</p>
            <div className="flex gap-[10px] justify-center">
                <Link to={'/register'} className="px-[20px] py-[7px] bg-[#17a2b7] text-white">{signupText}</Link>
                <Link to={'/login'} className="px-[20px] py-[7px] text-black bg-[#fff]">{loginText}</Link>
            </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 brightness-[30%]">
            <img src="/hero.jpg"  className="object-cover " alt="hero" />
        </div>
    </div>
  )
}

export default Home