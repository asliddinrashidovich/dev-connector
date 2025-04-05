import { useContext,  useEffect,  useState } from "react"
import { AppContext } from "../context/context"
import { Link } from "react-router-dom"
import axios from "axios"
import { ScaleLoader } from "react-spinners"

function Dashboard() {
  const {headerBgColor, heroColor} = useContext(AppContext)
  const [userData, setUserData] = useState([])
  const [profileData, setProfileData] = useState()
  let token = localStorage.getItem('token')

  useEffect(() => {
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
  }, [])

  useEffect(() => {
    const getProfileMe = async () => {
        try {
            await axios.get(`https://nt-devconnector.onrender.com/api/profile/me`, {
                headers: {
                    "x-auth-token": token,
                }
            }).then((res) => {
                setProfileData(res.data)
                console.log(res.data)
            })
        }
        catch(err) {
            console.log(err)
        }
    }
    getProfileMe()
}, [])



  return (
    <>
        {userData &&  (
            <div className="w-full flex justify-center flex-col pt-[130px] max-w-[1000px] mx-auto  px-[50px]" style={{backgroundColor: heroColor}}>
                <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">Dashboard</h1>
                <p className="text-[30px] mb-[20px] " style={{color: headerBgColor}}> <i className="fa-solid fa-user"></i> Welcome {userData.name}</p>
                {!profileData && (
                    <>
                        <p className="mb-[20px]">You have not yet setup a profile, please add some info</p>
                        <Link to={'/create-profile'} className="w-[140px] px-[20px] py-[7px] bg-[#17a2b7] text-white mb-[20px]">Create Profile</Link> 
                    </>
                )}
                
                {profileData && (
                    <>
                        <div className="flex gap-[10px] mb-[30px]">
                            <Link to={'/edit-profile'} className="w-[120px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px]">Edit Profile</Link>
                            <Link to={'/add-experience'} className="w-[150px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px]">Add Experience</Link>
                            <Link to={'/add-education'} className="w-[150px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px]">Add Education</Link>
                        </div>
                        <div>
                            <h2 className="text-[30px] font-[600] mb-[20px]">Experience Credentials</h2>
                            <table className=" mb-[30px]"> 
                                <tr>
                                    <th className="border-[#fff] border-[2px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px] text-[#000] font-[600]">Company</th>
                                    <th className="border-[#fff] border-[2px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px] text-[#000] font-[600]">Title</th>
                                    <th className="border-[#fff] border-[2px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px] text-[#000] font-[600]">Year</th>
                                    <th className="border-[#fff] border-[2px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px] text-[#000] font-[600]"></th>
                                </tr>
                                {profileData.experience && profileData.experience.map(item => (
                                    <tr key={item.company}>
                                        <td className="border-[#fff] border-[2px] px-[20px] py-[12px]  mb-[20px] text-[#000] font-[400]">{item.company}</td>
                                        <td className="border-[#fff] border-[2px] px-[20px] py-[12px]  mb-[20px] text-[#000] font-[400]">{item.title}</td>
                                        <td className="border-[#fff] border-[2px] px-[20px] py-[12px]  mb-[20px] text-[#000] font-[400]">{item.from.slice(0,10)} - {item.to ? item.to.slice(0,10) : 'Now'}</td>
                                        <td className='bg-[red] px-[20px] cursor-pointer py-[10px]  text-[#fff]'>
                                            <i className="fa-solid fa-x"></i>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                        <div>
                            <h2 className="text-[30px] font-[600] mb-[20px]">Education Credentials</h2>
                            <table className=" mb-[30px]"> 
                                <tr>
                                    <th className="border-[#fff] border-[2px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px] text-[#000] font-[600]">School</th>
                                    <th className="border-[#fff] border-[2px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px] text-[#000] font-[600]">Deegre</th>
                                    <th className="border-[#fff] border-[2px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px] text-[#000] font-[600]">Years</th>
                                    <th className="border-[#fff] border-[2px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px] text-[#000] font-[600]"></th>
                                </tr>
                                {profileData.education && profileData.education.map(item => (
                                    <tr key={item.school}>
                                        <td className="border-[#fff] border-[2px] px-[20px] py-[12px]  mb-[20px] text-[#000] font-[400]">{item.description}</td>
                                        <td className="border-[#fff] border-[2px] px-[20px] py-[12px]  mb-[20px] text-[#000] font-[400]">{item.degree}</td>
                                        <td className="border-[#fff] border-[2px] px-[20px] py-[12px]  mb-[20px] text-[#000] font-[400]">{item.from.slice(0,10)} - {item.to ? item.to.slice(0,10) : 'Now'}</td>
                                        <td className='bg-[red] px-[20px] cursor-pointer py-[10px]  text-[#fff]'>
                                            <i className="fa-solid fa-x"></i>
                                        </td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                        <button className="bg-[red] px-[20px] cursor-pointer py-[10px] w-[200px] text-[#fff] mb-[30px]">Delete My Account</button>
                    </>
                )}
            </div>)
        }
        {!userData && (
        <div className="max-w-[100%] h-[100vh] flex justify-center items-center">
          <ScaleLoader color="#17a2b7"/>
        </div>)}
    </>
  )
}
export default Dashboard