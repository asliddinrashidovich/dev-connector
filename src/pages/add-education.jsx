// import axios from "axios"
import { useState } from "react"
// import toast from "react-hot-toast"
import { Link} from "react-router-dom"

function AddEducation() {
    const [bio, setBio] = useState('')
    const [degree, setDegree] = useState('')
    const [field, setField] = useState('')
    const [school, setSchool] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [check, setCheck] = useState()

    // let token = localStorage.getItem('token')
    // const navigate = useNavigate()

    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     await axios.post(`https://nt-devconnector.onrender.com/api/profile`, {
    //       bio,
    //       company,
    //       location,
    //       github,
    //       jobtitle,
    //     }, {
    //         headers: {
    //             "x-auth-token": token,
    //         }
    //     }).then((res) => {
    //         console.log(res.data)
    //         navigate("/dashboard")
    //     }).catch(() => {
    //       toast('We cannot update your profile ', {
    //         icon: '☹️',
    //       })
    //     })
    //   }
  return (
    <div className="w-full flex justify-center flex-col pt-[130px] max-w-[1000px] mx-auto  px-[50px]">
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">Add Your Education</h1>
        <p className="text-[30px] mb-[20px]" >{`Add any school or bootcamp that you have attended`}</p>
        <p className="text-[15px] mb-[20px]" >* = required field</p>
        <form >
            <label htmlFor="school" >
                <input value={school} onChange={(e) => setSchool(e.target.value)} required type="text" placeholder="* Schoool or Bootcamp" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px]"/>
            </label>
            <label htmlFor="degree" >
                <input value={degree} onChange={(e) => setDegree(e.target.value)} required type="text" placeholder="* Degree or Sertificate" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px]"/>
            </label>
            <label htmlFor="field" >
                <input value={field} onChange={(e) => setField(e.target.value)} required type="text" placeholder="Field of Study" className="w-full mb-[15px] border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px]"/>
            </label>

            <label htmlFor="from" >
                <span className="text-[#000] text-[20px] font-[600]">From Date</span>
                <input value={from} onChange={(e) => setFrom(e.target.value)} required type="date" placeholder="* Skills" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[20px]"/>
            </label>
            <label htmlFor="check"  className="flex items-center mb-[15px] gap-[10px]">
                <input id="check" value={check} onChange={() => setCheck(prev => !prev)} required type="checkbox" />
                <span className="text-[#555] text-[15px]">Current Job</span>
            </label>
            <label htmlFor="to" >
                <span className="text-[#000] text-[20px] font-[600]">To Date</span>
                <input value={to} onChange={(e) => setTo(e.target.value)} required disabled={check} type="date" placeholder="* Skills" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] "/>
            </label>

            <label htmlFor="bio" >
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} name="bio" id="bio" placeholder="Program description" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px] mb-[20px]">
                </textarea>
            </label>
            <div className="flex justify-start gap-[10px]">
                <button className="w-[100px] py-[7px] bg-[#17a2b7] text-white mb-[20px]">Submit</button>
                <Link to={'/dashboard'} className="w-[100px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px]">Go back</Link>
            </div>
        </form>
    </div>
  )
}

export default AddEducation