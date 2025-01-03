import { useNavigate } from "react-router-dom"

import { Button } from "../components/Button";


export const Index = () =>{

    const navigate = useNavigate();
    const HandleSignInClick = () =>{
        navigate("/signin")
    }
    
    const HandleSignUpClick = () =>{
        navigate("/signup")
    }
    
    

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div>
            <h1>Index page</h1>
            
            <Button onClick={HandleSignInClick} label={"signin"}/>
            <Button onClick={HandleSignUpClick} label={"signup"}/>

        </div>

    </div>
}