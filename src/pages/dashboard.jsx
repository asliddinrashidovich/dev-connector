import { useContext } from "react"
import { AppContext } from "../context/context"

function Dashboard() {
     const {headerBgColor, heroColor} = useContext(AppContext)
  return (
    <div className="w-full flex justify-center flex-col pt-[130px] max-w-[1000px] mx-auto  px-[50px]" style={{backgroundColor: heroColor}}>
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">Dashboard</h1>
        <p className="text-[30px] mb-[20px] " style={{color: headerBgColor}}> <i className="fa-solid fa-user"></i> Welcome </p>
        <p className="mb-[20px]">You have not yet setup a profile, please add some info</p>
        <button className="w-[130px] py-[7px] bg-[#17a2b7] text-white mb-[20px]">Create Profile</button>
    </div>
  )
}

export default Dashboard