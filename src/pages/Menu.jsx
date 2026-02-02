import MenuCard from "../components/MenuCard";
import "../styles/Menu.css";
import BottomSection from "../components/BottomSection.jsx";
import {useEffect, useRef, useState} from "react";

export default function Menu(user) {
    const [menu,setMenu]=useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/menu")
            .then((res)=>(res.json()))
            .then((data)=>setMenu(data))
            .catch(err => console.error(err));
    }, []);

  // useEffect(() => {
  //   const fetchMenu = async () => {
  //     try {
  //       const res = await fetch("http://localhost:8000/api/menu");
  //       const data = await res.json();
  //       setMenu(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //
  //   fetchMenu();
  // }, []);

    let itemRef = useRef(null);

    return (
        <section className="menu-page">
            <h1>Our Menu</h1>
            <p className="menu-subtitle">
              Freshly prepared dishes just for you
            </p>

            <div className="menu-container">
                {menu.map((item) => (
                    <MenuCard
                        ref={itemRef}
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

