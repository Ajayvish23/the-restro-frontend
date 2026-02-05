import MenuCard from "../components/MenuCard";
import "../styles/Menu.css";
import BottomSection from "../components/BottomSection.jsx";
import {useEffect, useState} from "react";
import {API_BASE_URL} from "../api/fetch.js";

export default function Menu({user}) {
    const [menu,setMenu]=useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/menu`)
            .then((res)=>(res.json()))
            .then((data)=>setMenu(data))
            .catch(err => console.error(err));
    }, []);


    return (
        <section className="menu-page">
            <h1>Our Menu</h1>
            <p className="menu-subtitle">
              Freshly prepared dishes just for you
            </p>

            <div className="menu-container">
                {menu.map((item) => (
                    <MenuCard
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        user={user}

                    />
                ))}
            </div>
            <BottomSection></BottomSection>
        </section>
    );
}

