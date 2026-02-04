import "../styles/MyProfile.css";

export default function Profile({user}) {
let avatar= "https://i.pravatar.cc/150"



return (
    <div className="profile-page">
        <div className="profile-card">
            <img src={avatar} alt="profile" className="avatar" />
            <h2>{user.username}</h2>
            <div className="profile-info">
                <p><strong>Email:</strong> {user.email}</p>
            </div>
        </div>
    </div>
  );
}
