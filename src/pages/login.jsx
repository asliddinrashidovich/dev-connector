import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="w-full flex justify-center flex-col pt-[130px] max-w-[1000px] mx-auto">
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">Sign In</h1>
        <p className="text-[30px] mb-[20px]">Sign Into Your Account</p>
        <form className="">
            <input type="email" placeholder="Email Address" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]"/>
            <input type="password" placeholder="Password" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]"/>
            <button className="w-[100px] py-[7px] bg-[#17a2b7] text-white mb-[20px]">Login</button>
            <p>Don{`'`}t have an account? <Link to={'/register'} className="text-[#17a2b7]">Sign Up</Link></p>
        </form>
    </div>
  )
}

export default Login