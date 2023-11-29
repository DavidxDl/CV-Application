import { useState } from "react";
import person from "../interfaces/person";
import "../styles/GeneralInfo.css";
import Input from "./Input";

interface props {
  user: person;
  onChange: (object: person) => void;
  display: boolean;
  handleForm: (index: number) => void;
}

function EducationInfo({ user, onChange, display, handleForm }: props) {
  const [isSend, setIsSend] = useState(false);
  if (!display) return;
  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setIsSend(true);
  }
  if (isSend) {
    return (
      <section className="card">
        <h2 className="cardHeader">Contact</h2>
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
        <h3>Phone: {user.phone}</h3>
        <h3>School: {user.schoolName}</h3>
        <h3>Title: {user.studyTitle}</h3>
        <h3>Date: {user.studyDate}</h3>
      </section>
    );
  }

  return (
    <section className="card">
      <h2 className="cardHeader">Contact</h2>
      <form className="generalInfo" onSubmit={handleSubmit}>
        <Input
          type="text"
          user={user}
          value={user.schoolName}
          inputFor="schoolName"
          label="School Name :"
          onChange={onChange}
        />
        <Input
          inputFor="studyTitle"
          label="School Title: "
          onChange={onChange}
          type="text"
          user={user}
          value={user.studyTitle}
        />
        <Input
          inputFor="studyDate"
          label="Study Date :"
          onChange={onChange}
          type="text"
          user={user}
          value={user.studyDate}
        />
        <div className="submitBtn">
          <input className="submitBtn" type="submit" value="Next" />
        </div>
      </form>
    </section>
  );
}

export default EducationInfo;
