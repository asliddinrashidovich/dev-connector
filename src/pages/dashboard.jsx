import { useContext,  useState } from "react"
import { AppContext } from "../context/context"
import { Link } from "react-router-dom"
import axios from "axios"

function Dashboard() {
  const {headerBgColor, heroColor} = useContext(AppContext)
  const [userData, setUserData] = useState([])
  let token = localStorage.getItem('token')

  const getProfile = async () => {
      try {
          await axios.get(`https://nt-devconnector.onrender.com/api/auth`, {
              headers: {
                  "x-auth-token": token,
              }
          }).then((res) => setUserData(res.data))
      }
      catch(err) {
          console.log(err)
      }
  }
  getProfile()

  return (
    <div className="w-full flex justify-center flex-col pt-[130px] max-w-[1000px] mx-auto  px-[50px]" style={{backgroundColor: heroColor}}>
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">Dashboard</h1>
        <p className="text-[30px] mb-[20px] " style={{color: headerBgColor}}> <i className="fa-solid fa-user"></i> Welcome {userData.name}</p>
        <p className="mb-[20px]">You have not yet setup a profile, please add some info</p>
        <Link to={'/create-profile'} className="w-[140px] px-[20px] py-[7px] bg-[#17a2b7] text-white mb-[20px]">Create Profile</Link>
    </div>
  )
}

export default Dashboard