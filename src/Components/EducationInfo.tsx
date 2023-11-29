import { useState } from "react";
import person from "../interfaces/person";
import "../styles/GeneralInfo.css";

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
    handleForm(2);
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
        <div className="nameInput">
          <label htmlFor="School">School Name: </label>
          <input
            onChange={(e) => {
              const updatedUser: person = {
                ...user,
                schoolName: e.target.value,
              };
              onChange(updatedUser);
            }}
            type="text"
            id="school"
            value={user.schoolName}
            required
          />
        </div>
        <div className="emailInput">
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => {
              const updatedUser: person = { ...user, email: e.target.value };
              onChange(updatedUser);
            }}
            type="email"
            id="email"
            value={user.email}
            required
          />
        </div>
        <div className="phoneInput">
          <label htmlFor="phone">Phone: </label>
          <input
            onChange={(e) => {
              const updatedUser: person = { ...user, phone: e.target.value };
              onChange(updatedUser);
            }}
            type="tel"
            id="phone"
            value={user.phone}
            required
            minLength={5}
          />
        </div>
        <div className="submitBtn">
          <input className="submitBtn" type="submit" value="Next" />
        </div>
      </form>
    </section>
  );
}

export default EducationInfo;
