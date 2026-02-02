import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import {Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import NotFound from "./components/NotFound.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./pages/Cart.jsx";

function App() {
    let [userdata, setUserdata]=useState("");


    useEffect(() => {
        axios.get("http://localhost:8000/api/getuser", {withCredentials:true})
            .then(res=>setUserdata(res.data.user))
            .catch(err=>console.log(err))
    }, []);

    let logoutHandler= async ()=>{
        await axios.post("http://localhost:8000/api/logout",
            {},
            {withCredentials:true}
        );
        setUserdata(null);
        toast.success("Logout Success!");
    }


    return (
        <div className={"body"}>
            <Navbar user={userdata} logout={logoutHandler}></Navbar>
            <div className={"main"}>
                <ScrollToTop></ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/menu" element={<Menu user={userdata}/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/login" element={<Login setUser={setUserdata}/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    pauseOnHover
                />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App
