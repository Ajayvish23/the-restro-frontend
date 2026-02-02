import "../styles/GobalCard.css"
import Button from "./Button.jsx";

export default function GlobalCard({cLass="global", title, content, content2}){
    return (
        <div className={cLass}>
            <h3>{title}</h3>
            <p>{content}</p>
            {content2 && <p>{content2}</p>}
        </div>
    )
}