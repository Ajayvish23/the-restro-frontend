import {useEffect, useState} from "react";
import axios from "axios";
import "../styles/Login.css"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import api from "../api/axios.js";

export default function Login({setUser}){
    let [username, setUsername]=useState("");
    let [password, setPassword]=useState("");
    let [userdata, setUserdata]=useState("");
    let navigate= useNavigate();

    function usernameHandler(event){
        let newUsername=event.target.value;
        setUsername(newUsername);
    }

    function passwordHandler(event){
        let newPassword=event.target.value;
        setPassword(newPassword);
    }
    let loginHandler= async (event)=>{
        event.preventDefault();
        console.log(username, password);

        try{
            let res= await api.post("/api/login",
            {username, password},
            {withCredentials:true}  //for session to persist
            )
            console.log(res);
            setUserdata(res.data.user);
            setUser(res.data.user);
            toast.success("Login Success!");
            navigate("/");
        }catch{
            toast.error("Login failed");
        }

        setUsername("");
        setPassword("");
    }

    let logoutHandler= async ()=>{
        await api.post("/api/logout",
            {},
            {withCredentials:true}
        );

    }

    useEffect(() => {
        api.get("/api/getuser", {withCredentials:true})
            .then(res=>setUserdata(res.data.user))
            .catch(err=>console.log(err))
    }, []);




    return (
        <div className={"auth-container"}>
            <div className={"auth-card"}>
                {!userdata? <>
                    <h2>Welcome Back</h2>
                    <p className="subtitle">Please sign in to continue</p>
                    <form onSubmit={loginHandler}>
                        <input placeholder={"Username"} onChange={usernameHandler} value={username}/>
                        <input placeholder={"Password"} onChange={passwordHandler} value={password}/>
                        <button>Login</button>
                    </form>
                    </> :
                    <>
                        <h2>Hello</h2>
                        <p className={"subtitle"}>{userdata.username}</p>
                        <form onSubmit={logoutHandler}>
                            <button>Logout</button>
                        </form>
                    </>
                }
            </div>
        </div>
    )
}

//alag se userdata state variable banana pda, kyoki res me backend se jo user data aa rhi h use hm directly
//render nhi kr skte, but we need to first store in useState variable, and then we can access it anywhere.

//on refreshing page, user details vanishes from the UI but session still exist. To solve this problem we used useEffect here.