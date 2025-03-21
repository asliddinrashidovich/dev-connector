import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center overflow-hidden items-center relative">
        <div className="text-center z-10 text-white">
            <h1 className="text-[70px] font-[600] mb-[20px]">Developer Connector</h1>
            <p className="text-[24px] mb-[20px]">Create a developer profile/portfolio, share posts and get help from other developers</p>
            <div className="flex gap-[10px] justify-center">
                <Link to={'/register'} className="w-[100px] py-[7px] bg-[#17a2b7] text-white">Sign up</Link>
                <Link to={'/login'} className="w-[100px] py-[7px] text-black bg-[#fff]">Login</Link>
            </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 brightness-[30%]">
            <img src="/public/hero.jpg" className="object-cover " alt="hero" />
        </div>
    </div>
  )
}

export default Home