import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../context/context"
import axios from "axios"
import toast from "react-hot-toast"

function Login() {
  const {signinHeader, signintitle, headerBgColor, heroColor, email, setEmail, password, setPassword} = useContext(AppContext)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    await axios.post(`https://nt-devconnector.onrender.com/api/auth`, {
      email,
      password,
    }).then((res) => {
      localStorage.setItem('token', res.data.token)
      toast.success('Wellcome dear user')
      navigate("/dashboard")
    }).catch(() => {
      toast('We cannot find this user!, PLease try again or register', {
        icon: '☹️',
      })
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div className="w-full flex justify-center flex-col pt-[130px] max-w-[1000px] mx-auto  px-[50px]" style={{backgroundColor: heroColor}}>
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">{signinHeader}</h1>
        <p className="text-[30px] mb-[20px]" style={{color: headerBgColor}}>{signintitle}</p>
        <form onSubmit={handleSubmit}>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"  className="w-full bg-transparent border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]"/>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"  className="w-full bg-transparent border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px] "/>
            <button className="w-[100px] py-[7px] bg-[#17a2b7] text-white mb-[20px]">Login</button>
            <p style={{color: headerBgColor}}>Don{`'`}t have an account? <Link to={'/register'} className="text-[#17a2b7]">Sign Up</Link></p>
        </form>
    </div>
  )
}

export default Login