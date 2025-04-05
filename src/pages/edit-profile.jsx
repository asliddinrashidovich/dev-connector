import axios from "axios"
import { useEffect, useState } from "react"
// import toast from "react-hot-toast"
import { Link } from "react-router-dom"

function EditProfile() {
    const [bio, setBio] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [github, setGithub] = useState('')
    const [status, setStatus] = useState('')
    const [skills, setSkills] = useState('')
    const [Website, setWebsite] = useState('')
    const [profileData, setProfileData] = useState()
    let token = localStorage.getItem('token')

    // const navigate = useNavigate()

    const getProfileEdit = async () => {
        try {
            await axios.get(`https://nt-devconnector.onrender.com/api/profile/me`, {
                headers: {
                    "x-auth-token": token,
                }
            }).then((res) => {
                setProfileData(res.data)
                console.log(res.data)
                setStatus(profileData.status)
                setBio(profileData.bio)
                setCompany(profileData.company)
                setWebsite(profileData.website)
                setLocation(profileData.location)
                setSkills(profileData.skills)
                setGithub(profileData.githubusername)
            })
        }
        catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getProfileEdit()
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        // await axios.post(`https://nt-devconnector.onrender.com/api/profile`, {
        //   bio,
        //   company,
        //   location,
        //   github,
        //   status,
        //   skills,
        //   Website,
        // }, {
        //     headers: {
        //         "x-auth-token": token,
        //     }
        // }).then((res) => {
        //     console.log(res.data)
        //     navigate("/dashboard")
        // }).catch(() => {
        //   toast('We cannot update your profile ', {
        //     icon: '☹️',
        //   })
        // })
      }
  return (
    <div className="w-full flex justify-center flex-col pt-[130px] max-w-[1000px] mx-auto  px-[50px]">
        <h1 className="text-[#17a2b7] text-[50px] font-[700] mb-[20px]">Edit Your Profile</h1>
        <p className="text-[30px] mb-[20px]" >{`Add some changes to your profile`}</p>
        <p className="text-[15px] mb-[20px]" >* = required field</p>
        <form onSubmit={handleSubmit}>
            <label htmlFor="status" >
                <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" id="stutus " className="w-full bg-transparent border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mb-[3px]">
                    <option value="* Select Professional Status">* Select Professional Status</option>
                    <option value="Developer">Developer</option>
                    <option value="Junior Developer">Junior Developer</option>
                    <option value="Senior Developer">Senior Developer</option>
                    <option value="Manager">Manager</option>
                    <option value="Student or Learning">Student or Learning</option>
                    <option value="Instructor or Teacher">Instructor or Teacher</option>
                    <option value="Intern">Intern</option>
                    <option value="Other">Other</option>
                </select>
                <span className="text-[#555] text-[14px] mb-[20px]">Give us an idea of where you are at in your career</span>
            </label>
            <label htmlFor="company" >
                <input value={company} onChange={(e) => setCompany(e.target.value)} required type="text" placeholder="Company" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px]"/>
                <span className="text-[#555] text-[14px] mb-[20px]">Could be your own company or one you work for</span>
            </label>
            <label htmlFor="website" >
                <input value={Website} onChange={(e) => setWebsite(e.target.value)} required type="text" placeholder="Website" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px]"/>
                <span className="text-[#555] text-[14px] mb-[20px]">Could be your own or a company website</span>
            </label>
            <label htmlFor="location" >
                <input value={location} onChange={(e) => setLocation(e.target.value)} required type="text" placeholder="Location" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px]"/>
                <span className="text-[#555] text-[14px] mb-[20px]">City & state suggested (eg. Boston, MA)</span>
            </label>
            <label htmlFor="skill" >
                <input value={skills} onChange={(e) => setSkills(e.target.value)} required type="text" placeholder="* Skills" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px]"/>
                <span className="text-[#555] text-[14px] mb-[20px]">Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)</span>
            </label>
            <label htmlFor="github" >
                <input value={github} onChange={(e) => setGithub(e.target.value)} required type="text" placeholder="Github Username" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px]"/>
                <span className="text-[#555] text-[14px] mb-[20px]">If you want your latest repos and a Github link, include your username
                </span>
            </label>
            <label htmlFor="bio" >
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} name="bio" id="bio" placeholder="A short bio  of yourself" className="w-full border-[#c8c8c8] border-[2px] p-[7px] text-[20px] mt-[15px]">

                </textarea>
                <span className="text-[#555] text-[14px] mb-[40px]">Tell us a little about yourself </span>
            </label>
            <div className="flex justify-start gap-[10px] mb-[40px]">
                <button className="bg-[#f4f4f4] px-[20px] py-[10px]  mt-[40px]" >Add Social Network Links</button>
                <div className="bg-[#f4f4f4] px-[20px] py-[10px] mt-[40px]" >Optional</div>
            </div>
            <div className="flex justify-start gap-[10px]">
                <button className="w-[100px] py-[7px] bg-[#17a2b7] text-white mb-[20px]">Submit</button>
                <Link to={'/dashboard'} className="w-[100px] px-[20px] py-[7px] bg-[#f4f4f4]  mb-[20px]">Go back</Link>
            </div>
        </form>
    </div>
  )
}

export default EditProfile