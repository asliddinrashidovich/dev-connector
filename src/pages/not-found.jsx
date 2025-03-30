import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
        <img src="/public/not-found.jpg" className="w-[400px] " alt="page not found" />
        <h1 className="text-[30px] my-[20px]">Oops page not found, ☹️</h1>
        <Link to={'/'} className="py-[10px] px-[20px] text-white bg-[#17a2b7] cursor-pointer">Home</Link>
    </div>
  )
}

export default NotFound