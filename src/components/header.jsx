import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="w-full fixed bg-[#353a40] py-[10px] z-[99]">
        <div className="max-w-[calc(100vw-140px)] text-white w-full mx-auto flex justify-between items-center">
            <Link to={'/'} className="">
                <span className="text-[30px] font-[700]">DevConnector</span>
            </Link>
            <ul className="flex gap-[20px]">
                <li>
                    <Link to={'/developer'}>
                        Developer
                    </Link>
                </li>
                <li>
                    <Link to={'/register'}>
                        Register
                    </Link>
                </li>
                <li>
                    <Link to={'login'}>
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Header