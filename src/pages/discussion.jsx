import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
let token = localStorage.getItem('token')

function PostDetails() {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [text, setText] = useState('');
    console.log(user)
    useEffect(() => {
        axios.get(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
          headers: {
              "x-auth-token": token,
          }
        }).then((res) => setUser(res.data))
    }, [])

  const getAuth = async () => {
      // await axios.get(`https://nt-devconnector.onrender.com/api/auth`, {
      //     headers: {
      //         "x-auth-token": token,
      //     }
      // }).then((res) => setMeid(res.data._id))
  }
  getAuth()

  // delete
  // const handleDelete = async (id) => {
  //     // axios.delete(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
  //     //     headers: {
  //     //         "x-auth-token": token,
  //     //     } 
  //     // })
  //     // setTextpostdelet(prev => !prev)
  // }

  function handleSubmit(e) {
      e.preventDefault()
      // axios.post(`https://nt-devconnector.onrender.com/api/posts`, {text}, {
      //     headers: {
      //         "x-auth-token": token,
      //     }
      // }).then(() => {
      //   toast.success('Your commit successfuly added')
      // }).catch(() => {
      //   toast('We cannot post your commit', {
      //     icon: '☹️',
      //   })
      // })
      // setText('')
      // setTextpost(prev => !prev)
    }
  return (
    <div className='pt-[100px]  px-[50px]'>
      {user && <div>
        <Link className="bg-[#f4f4f4] px-[20px] py-[10px] " to={'/posts'}>Back to Profile</Link>
        <div className='border py-4 px-[40px] border-[#555] mb-[20px] flex gap-[50px] items-center mt-[30px]' >
          <div className='flex gap-[10px] flex-col items-center w-[200px]'>
              <div className='w-[100px] h-[100px] rounded-[100%] overflow-hidden'>
                  <img className='mb-[20px]' src="/user.jpg" alt="user" />
              </div>
              <p className='text-center text-[22px] font-[600] text-[#17a2b7]'>{user.name}</p>
          </div>
          <div>
              <p className='mb-[20px]'>{user.text}</p>
              <p className='mb-[20px]'>{user.date}</p>
              <div className='flex gap-[10px] items-center'>
                  <button className='cursor-pointer w-[70px] bg-[#f4f4f4] py-[10px]'>
                      <i className="fa-solid fa-thumbs-up"></i>
                  </button>
                  <button className='cursor-pointer w-[70px] bg-[#f4f4f4] py-[10px]'>
                      <i className="fa-solid fa-thumbs-down"></i>
                  </button>
                  <button  className='py-[10px] px-[20px] text-white bg-[#17a2b7] cursor-pointer'>Discussion</button>
              </div>
          </div>
        </div>
        <div className='p-[10px] bg-[#17a2b7] text-[#fff] font-semibold mb-[20px] text-[20px]'>Leave a Comment</div>
        <form onSubmit={handleSubmit} >
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} className='w-full bg-transparent border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]' placeholder='Commit the post' ></textarea>
            <button className='text-[#fff] px-[20px] py-[10px] bg-[#353a40] mb-[30px]'>Submit</button>
        </form>
      </div>}
      {!user && (
        <div className="max-w-[100%] h-[100vh] flex justify-center items-center">
          <ScaleLoader color="#17a2b7"/>
        </div>
      )}
    </div>
  )
}

export default PostDetails