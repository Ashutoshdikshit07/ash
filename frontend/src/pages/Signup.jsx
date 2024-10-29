import { useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from "axios"


import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"




export const Signup = () =>{


    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    // Base URL from environment variable
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // This should work correctly

    const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3000";

    
    // Function to call the backend and check if the credentials are correct.
    const handleSignUp = async ()=>{
        try{
            //It checks if the errorMessage contains any value to reduce any unnecessary render
            if(errorMessage){
                setErrorMessage("")
            }
            const response = await axios.post(`${baseUrl}/api/v1/user/signup`, {
                username,
                firstName,
                lastName,
                password,
            })
            navigate("/dashboard")
        }
        catch(e){
            if(e.response && e.response.data && e.response.data.message){
                setErrorMessage(e.response.data.message)
            }
            else{
                setErrorMessage("An error occured please try again later")
            }
        }  
    }


    const HandleIndexClick = () =>{
        navigate("/")
    }

    const HandleSignInClick = () =>{
        navigate("/signin")
    }

    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max shadow-2xl shadow-slate-950">
                <div className="text-red-600 text-center font-mono text-lg antialiased hover:subpixel-antialiased font-semibold">
                    {errorMessage}
                </div>
                <Heading label={"Sign up"}/>
                <SubHeading label={"Enter your information to create an account"} />
                <InputBox onChange={e=>{
                    setFirstName(e.target.value)
                }} type={"text"} label={"First Name"} placeholder={"John"} />

                <InputBox onChange={e=>{
                    setLastName(e.target.value)
                }} type={"text"} label={"Last Name"} placeholder={"Doe"} />
                
                <InputBox onChange={e=>{
                    setUsername(e.target.value)
                }} type={"text"} label={"Email"} placeholder={"john@gmail.com"} />
                
                <InputBox onChange={e=>{
                    setPassword(e.target.value)
                }}type={"password"} label={"Password"} placeholder={"123456"} />
                
                <div className="pt-4">
                    <Button onClick={handleSignUp} label={"Sign up"} />
                </div>
                <div></div>
                <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
            
            </div>

            
        </div>
        

    </div>
}

{/* <Button onClick={HandleSignInClick} label={"Sign in"}/>
            <Button onClick={HandleIndexClick} label={"Home"}/> */}
