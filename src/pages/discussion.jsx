import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

function PostDetails() {
    const {id} = useParams();
    const [user, setUser] = useState();
    console.log(user)
    useEffect(() => {
        axios.get(`https://nt-devconnector.onrender.com/api/profile/user/${id}`).then((res) => setUser(res.data))
    }, [])
  return (
    <div className='pt-[100px]  px-[50px]'>
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">Posts</h1>
        <p className="text-[24px] mb-[20px]">Wellcome to the community</p>
        <div className='p-[10px] bg-[#17a2b7] text-[#fff] font-semibold mb-[10px]'>Leave a Commit</div>
        <form onSubmit={handleSubmit}>
            <textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} className='w-full bg-transparent border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[15px]' placeholder='Create a post' ></textarea>
            <button className='text-[#fff] px-[20px] py-[10px] bg-[#353a40] mb-[30px]'>Submit</button>
        </form>
    </div>
  )
}

export default PostDetails