import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../context/context"

function Header() {
    const {setHeadertext, setHeaderparagraph, setSignuptext, setLogintext, setSignupheader, setSigninheader, setSignuptitle, setSignintitle} = useContext(AppContext)
    const [lang, setLang] = useState('eng')


    function handleLanguage() {
        if(lang == 'uz') {
            setHeadertext("Dastur Bog'lovchisi")
            setHeaderparagraph("Dasturchi profili/portfelini yarating, postlarni baham ko'ring va boshqa ishlab chiquvchilardan yordam oling")
            setSignuptext("Ro'yxatdan o'tish")
            setLogintext("Tizimga kirish")
            setSignupheader("Ro'yxatdan o'tish")
            setSigninheader('Tizimga kirish')
            setSignuptitle("Hisobingizni yarating")
            setSignintitle("Hisobingizga kiring")
        } else if(lang == 'ru') {
            setHeadertext("Коннектор разработчика")
            setHeaderparagraph("Создайте профиль/портфолио разработчика, делитесь публикациями и получайте помощь от других разработчиков.")
            setSignuptext("Зарегистрироваться")
            setLogintext("Вход в систему")
            setSignupheader("Зарегистрироваться")
            setSigninheader('Вход в систему')
            setSignuptitle("Создайте свою учетную запись")
            setSignintitle("Войдите в свою учетную запись")
        } else {
            setHeadertext("Developer connector")
            setHeaderparagraph("Create a developer profile/portfolio, share posts and get help from other developers")
            setSignuptext("Sign Up")
            setLogintext("Login")
            setSignupheader("Sign Up")
            setSigninheader('Sign In')
            setSignuptitle("Create Your Account")
            setSignintitle("Sign Into Your Account")
        }
    }

    useEffect(() => {
        handleLanguage()
    }, [lang])
    return (
    <header className="w-full fixed bg-[#353a40] py-[10px] z-[99]">
        <div className="max-w-[calc(100vw-140px)] text-white w-full mx-auto flex justify-between items-center">
            <Link to={'/'} className="">
                <span className="text-[30px] font-[700]">DevConnector</span>
            </Link>
            <ul className="flex gap-[20px]">
                <div className="mr-[10px] cursor-pointer">
                <i className="fa-solid fa-moon "></i>
                {/* <i className="fa-solid fa-sun "></i> */}
                </div>
                <div className="mr-[50px] ">
                    <select name="lang"  onChange={(e) => {setLang(e.target.value); handleLanguage}} id="lang" className="w-[60px] cursor-pointer">
                        <option value="uz"  className="bg-[#555]">uz</option>
                        <option value="eng" className="bg-[#555]">eng</option>
                        <option value="ru" className="bg-[#555]"> ru</option>
                    </select>
                </div>
                <li>
                    <Link to={'/developer'}>
                        Developers
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