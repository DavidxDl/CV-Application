import { useState } from "react";
import person, { experience } from "../interfaces/person";
import "../styles/GeneralInfo.css"
import Input from "./Input";
import UserInfo from "./UserInfo";

interface props {
  user: person;
  onChange: (user: person) => void;
  display: boolean;
  handleForm: (index: number) => void;
}

export default function WorkInfoForm({ user, onChange, display, handleForm }: props) {
  const [isSubmited, setIsSubmited] = useState(false);
  const [work, setWork] = useState<experience>({});

  if (isSubmited)
    return (
      <section className="card">
        <h2 className="cardHeader">Your Information</h2>
        <UserInfo user={user} />
      </section>
    )
  if (display)
    return (
      <section className="card">
        <h2 className="cardHeader">Practical Experience</h2>
        <form
          className="generalInfo"
          onSubmit={(e) => {
            e.preventDefault();
            setIsSubmited(true);
            onChange({ ...user, education: [...user.education], experience: [...user.experience, work] })
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
            <input onClick={() => handleForm(1)} className="prevBtn" value="Prev" type="button" />
            <input className="submitBtn" type="submit" value="Next" />
          </div>
        </form>
      </section >
    )
}

