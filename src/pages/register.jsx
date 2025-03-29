import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AppContext } from "../context/context"
import axios from "axios"
import toast from "react-hot-toast"

function Register() {
  const {signupHeader, signupTitle, headerBgColor, name, setName, email, setEmail, password, setPassword, confirmpassword ,setConfirmpassword} = useContext(AppContext)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()
    await axios.post(`https://nt-devconnector.onrender.com/api/users`, {
      name,
      email,
      password,
      confirmpassword
    }).then((res) => {
      navigate("/dashboard")
      localStorage.setItem('token', res.data.token)
      toast.success('Wellcome dear new user')
    }).catch(() => {
      toast('This user already exists, Please login', {
        icon: '🙄',
      })
    })
    setName('')
    setEmail('')
    setPassword('')
    setConfirmpassword('')
  }
  return (
    <div className="w-full flex justify-center flex-col pt-[130px] max-w-[1000px] mx-auto  px-[50px]">
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">{signupHeader}</h1>
        <p className="text-[30px] mb-[20px]" style={{color: headerBgColor}}>{signupTitle}</p>
        <form onSubmit={handleSubmit}>
            <input required type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]"/>
            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[3px]"/>
            <p className="text-[#555] text-[14px] mb-[20px]" style={{color: headerBgColor}}>This site uses Gravatar so if you want a profile image, use a Gravatar email</p>
            <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]"/>
            <input required type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder="Confirm Password" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]"/>
              <button  type="submit" className="w-[100px] py-[7px] bg-[#17a2b7]  mb-[20px]">Register</button>
            <p style={{color: headerBgColor}}>Already have an account? <Link to={'/login'} className="text-[#17a2b7]">Sign in</Link></p>
        </form>
    </div>
  )
}

export default Register