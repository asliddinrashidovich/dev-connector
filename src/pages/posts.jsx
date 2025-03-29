import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/context'
import axios from 'axios'
import toast from 'react-hot-toast'

function Posts() {
    const {posts, setPosts} = useContext(AppContext)
    const [text, setText] = useState('')
    const [meid, setMeid] = useState()
    const [textPost, setTextpost] = useState(false)
    let token = localStorage.getItem('token')
    
    useEffect(() => {
        axios.get(`https://nt-devconnector.onrender.com/api/posts`, {
            headers: {
                "x-auth-token": token,
            }
        }).then((res) => setPosts(res.data))
    }, [textPost])

    const getAuth = async () => {
        await axios.get(`https://nt-devconnector.onrender.com/api/auth`, {
            headers: {
                "x-auth-token": token,
            }
        }).then((res) => setMeid(res.data._id))
    }
    getAuth()

    // delete
    const handleDelete = async (id) => {
        axios.delete(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
            headers: {
                "x-auth-token": token,
            } 
        })
        setTextpost(true)
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post(`https://nt-devconnector.onrender.com/api/posts`, {text}, {
            headers: {
                "x-auth-token": token,
            }
        }).then(() => {
          toast.success('Your commit successfuly added')
        }).catch(() => {
          toast('We cannot post your commit', {
            icon: '☹️',
          })
        })
        setText('')
        setTextpost(true)
      }
      console.log(meid)
  return (
    <div className='pt-[100px]  px-[50px]'>
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">Posts</h1>
        <p className="text-[24px] mb-[20px]">Wellcome to the community</p>
        <div className='p-[10px] bg-[#17a2b7] text-[#fff] font-semibold mb-[10px]'>Say Something...</div>
        <form onSubmit={handleSubmit}>
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} className='w-full bg-transparent border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]' placeholder='Create a post' ></textarea>
            <button className='text-[#fff] px-[20px] py-[10px] bg-[#353a40] mb-[30px]'>Submit</button>
        </form>

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
                    <div className='flex gap-[10px] items-center'>
                        <button className='cursor-pointer w-[70px] bg-[#999] py-[10px]'>
                            <i className="fa-solid fa-thumbs-up"></i>
                        </button>
                        <button className='cursor-pointer w-[70px] bg-[#999] py-[10px]'>
                            <i className="fa-solid fa-thumbs-down"></i>
                        </button>
                        <button className='py-[10px] px-[20px] text-white bg-[#17a2b7] cursor-pointer'>Discussion</button>
                        {post.user == meid && <button onClick={() => handleDelete(post._id)} className='bg-[red] px-[20px] cursor-pointer py-[10px]  text-[#fff]'><i className="fa-solid fa-x"></i></button>}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Posts