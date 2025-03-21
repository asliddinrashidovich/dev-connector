import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../context/context"

function Register() {
  const {signupHeader, signupTitle} = useContext(AppContext)
  return (
    <div className="w-full flex justify-center flex-col pt-[130px] max-w-[1000px] mx-auto">
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">{signupHeader}</h1>
        <p className="text-[30px] mb-[20px]">{signupTitle}</p>
        <form className="">
            <input type="text" placeholder="Name" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]"/>
            <input type="email" placeholder="Email Address" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[3px]"/>
            <p className="text-[#555] text-[14px] mb-[20px]">This site uses Gravatar so if you want a profile image, use a Gravatar email</p>
            <input type="password" placeholder="Password" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]"/>
            <input type="password" placeholder="Confirm Password" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]"/>
            <button className="w-[100px] py-[7px] bg-[#17a2b7] text-white mb-[20px]">Register</button>
            <p>Already have an account? <Link to={'/login'} className="text-[#17a2b7]">Sign in</Link></p>
        </form>
    </div>
  )
}

export default Register