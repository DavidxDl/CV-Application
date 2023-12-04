import person from "../interfaces/person";
import "../styles/Cv.css"
import "../../public/FTG5402-Editar-scaled.webp"
import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";
import Experience from "./Experience";
import Educaiton from "./Education";
import FormTabs from "./FormTabs";
interface props {
  user: person;
  onChange: (user: person) => void;
}


export default function Cv({ user, onChange }: props) {
  const fullName: string = user.name + ' ' + user.lastName;
  return (
    <div className="wrapperCv">
      <FormTabs user={user} onChange={onChange} />
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
        <div className="aboutMeSection ">
          <h2>About Me</h2>
          <p>{user.aboutMe}</p>
        </div>
        <div className="bottomCv">
          <Experience experiences={user.experience} />
          <Educaiton education={user.education} />
        </div>
      </div>
    </div>
  )
}
