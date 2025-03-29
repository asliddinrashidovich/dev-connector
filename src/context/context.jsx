import { createContext, useState } from "react";
export const AppContext = createContext();

export function AppProvider({children}) {
    const [headerText, setHeadertext] = useState('Developer Connector')
    const [headerParagraph, setHeaderparagraph] = useState('Create a developer profile/portfolio, share posts and get help from other developers')
    const [signupText, setSignuptext] = useState('Sign Up')
    const [loginText, setLogintext] = useState('Login')
    const [signupHeader, setSignupheader] = useState('Sign up')
    const [signinHeader, setSigninheader] = useState('Sign in')
    const [signupTitle, setSignuptitle] = useState('Create Your Account')
    const [signintitle, setSignintitle] = useState('Sign Into Your Account')
    const [headerBgColor, setBgcolor] = useState('#33383e')
    const [heroColor, setHerocolor] = useState('#fff')
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [developers, setDevelopers] = useState([])
    const [login, setLogin] = useState(false)
            
    return (
        <AppContext.Provider value={{headerText, setHeadertext, headerParagraph, setHeaderparagraph,signupText, setSignuptext, loginText, setLogintext, signupHeader, setSignupheader, signinHeader, setSigninheader, signupTitle, setSignuptitle, signintitle, setSignintitle, headerBgColor, setBgcolor, heroColor ,setHerocolor, name, setName, email, setEmail, password, setPassword, confirmpassword ,setConfirmpassword, login, setLogin ,developers, setDevelopers}}>
            {children}
        </AppContext.Provider>
    )
}