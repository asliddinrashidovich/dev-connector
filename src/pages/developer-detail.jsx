import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

function DeveloperDetails() {
    const {id} = useParams();
    const [user, setUser] = useState();
    console.log(user)
    useEffect(() => {
        axios.get(`https://nt-devconnector.onrender.com/api/profile/user/${id}`).then((res) => setUser(res.data))
    }, [])
  return (
    <div className="pt-[100px]  px-[50px]">
        <Link className="bg-[#f4f4f4] px-[20px] py-[10px] " to={'/developer'}>Back to Profile</Link>
        <div className="w-full bg-[#17a2b7] py-[50px] mt-[40px] flex flex-col items-center mb-[10px]"> 
            <img src="/user.jpg" alt="user img" className="w-[220px] h-[220px] rounded-[100%] mb-[25px]"/>
            <h2 className="text-[40px]  text-[#fff] font-[600] mb-[20px]">{user.user.name}</h2>
            <h3 className='text-[25px] text-[#fff] mb-[20px]'>{user.status} at {user.company}</h3>
            <h3 className='text-[20px] text-[#fff] mb-[20px]'>{user.location}</h3>
        </div>
        <div className="w-full bg-[#f4f4f4] border-[1px] border-[#777]  mt-[40px] flex flex-col items-center mb-[10px]">
            <div className="border-b-[1px] border-[#777] p-[30px] w-[90%] text-center"> 
                <h2 className="text-[#17a2b7] text-[25px] font-[600] mb-[15px]">{user.user.name.split(' ')[0]}s Bio</h2>
                <p className="text-[17px] font-[500]">{user.bio}</p>
            </div>
            <div className="border-b-[1px] border-[#777] p-[30px] w-[90%] text-center"> 
                <h2 className="text-[#17a2b7] text-[25px] font-[600] mb-[15px]">{user.user.name.split(' ')[0]}s Bio</h2>
            </div>
        </div>  
    </div>
  )
}

export default DeveloperDetails