import person from "../interfaces/person";
import "../styles/Cv.css"
import "../../public/FTG5402-Editar-scaled.webp"
import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";
import Experience from "./Experience";
import Educaiton from "./Education";
interface props {
  user: person;
}


export default function Cv({ user }: props) {
  const fullName: string = user.name + ' ' + user.lastName;
  return (
    <div className="Cv">
      <div className="topCv">
        <div className="profile">
          <div className="profilePhoto">
          </div>
          <div className="profileInfo">
            <div className="profileName">
              <Name name={fullName} />
            </div>
            <div className="profileProfession">
              <h3 id="profileProfession">{user.profession}</h3>
            </div>
            <div className="contactProfile">
              <Email email={user.email} />
              <Phone phone={user.phone} />
            </div>
          </div>
        </div>
      </div>
      <div className="bottomCv">
        <Experience experiences={user.experience} />
        <Educaiton education={user.education} />
      </div>
    </div>
  )
}
