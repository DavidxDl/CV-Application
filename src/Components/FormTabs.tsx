import { useState } from "react";
import { Forms } from "../interfaces/forms";
import person from "../interfaces/person";
import "../styles/FormTabs.css"
import EducationInfo from "./EducationInfoForm";
import GeneralInfo from "./GeneralInfoForm";
import WorkInfoForm from "./WorkInfoForm";
import AboutMeForm from "./AboutMeForm";
interface props {
  user: person;
  onChange: (user: person) => void;
}
export default function FormTabs({ user, onChange }: props) {
  const [formIndex, setFormIndex] = useState(-1);

  return (
    <>
      <GeneralInfo handleForm={setFormIndex} display={formIndex === Forms.GeneralInfo} onChange={onChange} user={user} />
      <EducationInfo handleForm={setFormIndex} display={formIndex === Forms.EducationInfo} onChange={onChange} user={user} />
      <WorkInfoForm handleForm={setFormIndex} display={formIndex === Forms.WorkInfo} onChange={onChange} user={user} />
      <AboutMeForm handleForm={setFormIndex} display={formIndex === Forms.AboutMeInfo} user={user} onChange={onChange} />
      <div className="formTabs">
        <h3 onClick={() => setFormIndex(formIndex === Forms.GeneralInfo ? -1 : Forms.GeneralInfo)}>General</h3>
        <h3 onClick={() => setFormIndex(formIndex === Forms.EducationInfo ? -1 : Forms.EducationInfo)}>Education</h3>
        <h3 onClick={() => setFormIndex(formIndex === Forms.WorkInfo ? -1 : Forms.WorkInfo)}>Experience</h3>
        <h3 onClick={() => setFormIndex(formIndex === Forms.AboutMeInfo ? -1 : Forms.AboutMeInfo)}>About</h3>
      </div>
    </>
  )
}
