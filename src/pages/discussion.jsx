import { Link, useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import toast from "react-hot-toast";
let token = localStorage.getItem('token')

function PostDetails() {
    const { id } = useParams();
    const [user, setUser] = useState();
    const [text, setText] = useState('');
    const [meid, setMeid] = useState();

    useEffect(() => {
      axios.get(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: {
            "x-auth-token": token,
        }
      }).then((res) => setUser(res.data))
    }, [user?.comments])
    
    const getAuth = async () => {
      await axios.get(`https://nt-devconnector.onrender.com/api/auth`, {
          headers: {
              "x-auth-token": token,
          }
      }).then((res) => setMeid(res.data._id))
    }
    getAuth()

  async function handleDelete(comment) {
    try {
      await axios.delete(`https://nt-devconnector.onrender.com/api/posts/comment/${id}/${comment}`, {
          headers: {
              "x-auth-token": token,
          } 
      });

      setUser(prevUser => ({
        ...prevUser,
        comments: prevUser.comments.filter(com => {
          return com._id !== comment
        })
      }));

      toast('Your comment is deleted successfully', { icon: '✅' });
    } catch (error) {
        console.log("Error deleting comment:", error);
        toast('Failed to delete comment', { icon: '❌' });
    }
  }

  function handleSubmit(e) {
      e.preventDefault()
      axios.post(`https://nt-devconnector.onrender.com/api/posts/comment/${id}`, {text}, {
          headers: {
              "x-auth-token": token,
          }
      }).then(() => {
        toast('Your commit added successfuly', {
          icon: '🎉',
          style: {
            background: 'green',
            color: '#fff'
          }
        })
      }).catch(() => {
        toast('We cannot post your commit', {
          icon: '☹️',
        })
      })
      setText('')
    }
    async function handleLike() {
      await axios.put(`https://nt-devconnector.onrender.com/api/posts/like/${id}`, {}, {
          headers: {
              "x-auth-token": token,
          }
      }).then((res) => {
          console.log(res)
      }).catch((err) => {
          console.log(err)
      })
  }
  return (
    <div className='pt-[100px]  px-[50px]'>
      {user && <div>
        <Link className="bg-[#f4f4f4] px-[20px] py-[10px] " to={'/posts'}>Back to Profile</Link>
        <div className='border py-4 px-[40px] border-[#555] mb-[20px] flex gap-[50px] items-center mt-[30px]' >
          <div className='flex gap-[10px] flex-col items-center w-[200px]'>
              <div className='w-[100px] h-[100px] rounded-[100%] overflow-hidden'>
                  <img className='mb-[20px]' src={user.avatar} alt={user.text} />
              </div>
              <p className='text-center text-[22px] font-[600] text-[#17a2b7]'>{user.name}</p>
          </div>
          <div>
              <p className='mb-[20px]'>{user.text}</p>
              <p className='mb-[20px]'>{user.date}</p>
              <div className='flex gap-[10px] items-center'>
                  <button onClick={handleLike} className='cursor-pointer w-[70px] bg-[#f4f4f4] py-[10px]'>
                      <i className="fa-solid fa-thumbs-up"></i>  {user.likes.length}
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
        <div className="pb-[30px]">
          {user.comments?.map(post => (
                <div key={post._id} className='border py-4 px-[40px] border-[#555] mb-2 flex gap-[50px] items-center' >
                    <div className='flex gap-[10px] flex-col items-center w-[200px]'>
                        <div className='w-[100px] h-[100px] rounded-[100%] overflow-hidden'>
                            <img className='mb-[20px]' src={user.avatar} alt={user.text} />
                        </div>
                        <p className='text-center text-[22px] font-[600] text-[#17a2b7]'>{post.name}</p>
                    </div>
                    <div>
                        <p className='mb-[20px]'>{post.text}</p>
                        <p className='mb-[20px]'>{post.date}</p>
                        {post.user == meid && <button onClick={() => handleDelete(post._id)} className='bg-[red] px-[20px] cursor-pointer py-[10px]  text-[#fff]'><i className="fa-solid fa-x"></i></button>}
                    </div>
                </div>
            ))}
        </div>
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