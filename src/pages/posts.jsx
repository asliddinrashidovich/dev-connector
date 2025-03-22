import { useContext, useEffect } from 'react'
import { AppContext } from '../context/context'
import axios from 'axios'

function Posts() {
    const {posts, setPosts} = useContext(AppContext)
    console.log(posts)
    useEffect(() => {
        let token = localStorage.getItem('token')
        axios.get(`https://nt-devconnector.onrender.com/api/posts`, {
            headers: {
                "x-auth-token": token,
            }
        }).then((res) => setPosts(res.data))
    }, [])
  return (
    <div className='pt-[100px]  px-[50px]'>
        {posts.map(post => (
            <div key={post._id} className='border py-4 px-[40px] border-[#555] mb-2 flex gap-[50px] items-center' >
                <div className='flex gap-[10px] flex-col items-center w-[200px]'>
                    <div className='w-[100px] h-[100px] rounded-[100%] overflow-hidden'>
                        <img className='mb-[20px]' src="/user.jpg" alt="user" />
                    </div>
                    <p className='text-center text-[22px] font-[600] text-[#17a2b7]'>{post.name}</p>
                </div>
                <div>
                    <p className='mb-[20px]'>{post.text}</p>
                    <p className='mb-[20px]'>{post.date}</p>
                    <div className='flex gap-[10px]'>
                        <button className='cursor-pointer w-[70px] bg-[#999] py-[10px]'>
                            <i className="fa-solid fa-thumbs-up"></i>
                        </button>
                        <button className='cursor-pointer w-[70px] bg-[#999] py-[10px]'>
                            <i className="fa-solid fa-thumbs-down"></i>
                        </button>
                        <button className='py-[10px] px-[20px] text-white bg-[#17a2b7] cursor-pointer'>Discussion</button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Posts