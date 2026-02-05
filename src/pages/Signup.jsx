import {useState} from "react";
import axios from "axios";
import "../styles/Signup.css"
import {toast} from "react-toastify";
import api from "../api/axios.js";
export default function Signup(){
    let [username, setUsername]=useState("");
    let [email, setEmail]=useState("");
    let [password, setPassword]=useState("");
    let [message,setMessage]=useState([]);

    function usernameHandler(event){
        let newUsername=event.target.value;
        setUsername(newUsername);
    }
    function emailHandler(event){
        let newEmail=event.target.value;
        setEmail(newEmail);
    }

    function passwordHandler(event){
        let newPassword=event.target.value;
        setPassword(newPassword);
    }

    function signupHandler(event){
        event.preventDefault();
        console.log(email, password);

        api.post("/api/register", {username,email, password},{withCredentials:true})
            .then(res=>setMessage(res.data.message))
            .catch(err=>setMessage(err.response.data.message))


        setUsername("");
        setEmail("");
        setPassword("");
        toast.success("Registered Successfully!");
    }


    return(
        <div className={"signup-container"}>
            <form className={"signup-form"} onSubmit={signupHandler}>
                <h2>Create New Account</h2>
                <input placeholder={"Username"} onChange={usernameHandler} value={username}/>
                <input placeholder={"Email"} onChange={emailHandler} value={email}/>
                <input placeholder={"Password"} onChange={passwordHandler} value={password}/>
                <button>SignUp</button>
                <p>{message}</p>
            </form>
            </div>
    )
}