
export default function ReviewCard({remark,name}){
    return(
        <div className="testimonial-card">
            <p>{remark}</p>
            <h4>— {name}</h4>
            <span>⭐⭐⭐⭐⭐</span>
        </div>
    )
}