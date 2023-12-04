import { useState } from "react";
import person, { schooles } from "../interfaces/person";
import "../styles/GeneralInfo.css";
import Input from "./Input";
import { v4 as uuid } from 'uuid'

interface props {
  user: person;
  onChange: (object: person) => void;
  display: boolean;
  handleForm: (index: number) => void;
}

const edu: schooles = { id: uuid(), schoolName: "", studyDate: "", studyTitle: "" };
function EducationInfo({ user, onChange, display, handleForm }: props) {
  const [education, setEducation] = useState<schooles>(edu)
  if (!display) return;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onChange({ ...user, experience: [...user.experience], education: [...user.education, education] })
    clearInputs();
  }
  function clearInputs() {
    setEducation(edu)
  }
  return (
    <section className="card">
      <h2 className="cardHeader">Education Info</h2>
      <form id="educationInfo" className="generalInfo" onSubmit={handleSubmit}>
        <Input
          type="text"
          value={education.schoolName}
          inputFor="schoolName"
          label="School Name :"
          onChange={(e) => setEducation({ ...education, schoolName: e.target.value })}
        />
        <Input
          inputFor="studyTitle"
          label="School Title: "
          onChange={(e) => setEducation({ ...education, studyTitle: e.target.value })}
          type="text"
          value={education.studyTitle}
        />
        <Input
          inputFor="studyDate"
          label="Study Date :"
          onChange={(e) => setEducation({ ...education, studyDate: e.target.value })}
          type="text"
          value={education.studyDate}
        />
        <div id="submitBtn">
          <input className="submitBtn" type="submit" value="Add" />
          <input onClick={() => handleForm(-1)} className="closeBtn" type="button" value="Close" />
        </div>
      </form>
    </section >
  );
}

export default EducationInfo;
