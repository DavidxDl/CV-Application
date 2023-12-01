import person from "../interfaces/person";
import "../styles/Cv.css"
import "../../public/FTG5402-Editar-scaled.webp"
interface props {
  user: person;
}


export default function Cv({ user }: props) {
  return (
    <div className="Cv">
      <div className="topCv">
        <div className="profile">
          <div className="profilePhoto">
          </div>
          <div className="profileInfo">
            <div className="profileName">
              <h2 id="profileName">{user.name} {user.lastName}</h2>
            </div>
            <div className="profileProfession">
              <h3 id="profession">{user.profession}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="contact"></div>
      <div className="bottomCv">
        bottom
      </div>
    </div>
  )
}
