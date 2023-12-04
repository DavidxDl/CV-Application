import { useState } from "react";
import person, { experience } from "../interfaces/person";
import "../styles/GeneralInfo.css"
import Input from "./Input";
import { v4 as uuid } from "uuid";

interface props {
  user: person;
  onChange: (user: person) => void;
  display: boolean;
  handleForm: (index: number) => void;
}

const defaultWork: experience = { id: uuid(), companyName: "", positionTitle: "", mainResponsibilities: "", workedTime: "" };
export default function WorkInfoForm({ user, onChange, display, handleForm }: props) {
  const [work, setWork] = useState<experience>(defaultWork);


  if (display)
    return (
      <section className="card">
        <h2 className="cardHeader">Practical Experience</h2>
        <form
          className="generalInfo"
          onSubmit={(e) => {
            e.preventDefault();
            onChange({ ...user, education: [...user.education], experience: [...user.experience, work] })
            setWork(defaultWork)
          }}
        >
          <Input
            inputFor="companyName"
            label="Company Name: "
            onChange={e => setWork({ ...work, companyName: e.target.value })}
            type="text"
            value={work.companyName}
          />
          <Input
            inputFor="positionTitle"
            label="Position :"
            onChange={e => setWork({ ...work, positionTitle: e.target.value })}
            type="text"
            value={work.positionTitle}
          />
          <Input
            type="text"
            inputFor="mainResponsibilities"
            label="Responsibilities :"
            onChange={e => setWork({ ...work, mainResponsibilities: e.target.value })}
            value={work.mainResponsibilities}
          />
          <Input
            type="text"
            inputFor="workedTime"
            label="Worked time :"
            onChange={e => setWork({ ...work, workedTime: e.target.value })}
            value={work.workedTime}
          />
          <div id="submitBtn">
            <input className="add" value="Add" type="submit" />
            <input onClick={() => handleForm(-1)} className="closeBtn" value="Close" type="button" />
          </div>
        </form>
      </section >
    )
}

