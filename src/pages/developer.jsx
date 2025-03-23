import { useContext, useEffect } from 'react'
import { AppContext } from '../context/context'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Developers() {
    const {developers, setDevelopers} = useContext(AppContext)
    console.log(developers)
    useEffect(() => {
        let token = localStorage.getItem('token')
        axios.get(`https://nt-devconnector.onrender.com/api/profile`, {
            headers: {
                "x-auth-token": token,
            }
        }).then((res) => setDevelopers(res.data))
    }, [])
  return (
    <div className='pt-[100px]  px-[50px]'>
        {developers.map(user => (
            <div key={user._id} className='border py-4 px-[40px] bg-[#f4f4f4] border-[#555] mb-2 flex gap-[50px] items-center' >
                <div className='flex gap-[10px] flex-col items-center w-[200px]'>
                    <div className='w-[200px] h-[200px] rounded-[100%] overflow-hidden'>
                        <img className='mb-[20px]' src="/user.jpg" alt="user" />
                    </div>
                    <p className='text-center text-[22px] font-[600] text-[#17a2b7]'>{user.name}</p>
                </div>
                <div>
                    <h2 className='text-[30px] font-[600] mb-[10px]'>{user.user.name}</h2>
                    <h2 className='text-[20px] mb-[20px]'>{user.status} at {user.company}</h2>
                    <p className='mb-[20px]'>{user.location}</p>
                    <div className='flex gap-[10px]'>
                        <Link to={`/developer/${user.user._id}`} className='py-[10px] px-[20px] text-white bg-[#17a2b7] cursor-pointer'>View Profile</Link>
                    </div>
                </div>
                <div className='ml-auto'>
                  {user.skills.map(skill => (
                    <h2 key={skill} className='text-[20px] font-[600] text-[#17a2b7]'><i className="fa-solid fa-check"></i>{skill}</h2>
                  ))}
                </div>
            </div>
        ))}
    </div>
  )
}

export default Developers