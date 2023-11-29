import { useState } from "react";
import person from "../interfaces/person";
import "../styles/GeneralInfo.css";

interface props {
  user: person;
  onChange: (object: person) => void;
}

function GeneralInfo({ user, onChange }: props) {
  const [isSend, setIsSend] = useState(false);
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
      </section>
    );
  }

  return (
    <section className="card">
      <h2 className="cardHeader">Contact</h2>
      <form className="generalInfo" onSubmit={handleSubmit}>
        <div className="nameInput">
          <label htmlFor="name">Name: </label>
          <input
            onChange={(e) => {
              const updatedUser: person = { ...user, name: e.target.value };
              onChange(updatedUser);
            }}
            type="text"
            id="name"
            value={user.name}
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

export default GeneralInfo;
