import { FunctionComponent, ReactComponentElement } from "react";
import person from "../interfaces/person";

interface props {
  user: person;
  label: string;
  inputFor: string;
  onChange: (person: person) => void;
}

export default function Input({ onChange, label, inputFor, user }: props) {
  return (
    <div className={inputFor}>
      <label htmlFor={inputFor}>{label}</label>
      <input
        onChange={(e) => {
          const updatedUser: person = {
            ...user,
            [inputFor]: e.target.value,
          };
          onChange(updatedUser);
        }}
        type="text"
        id="school"
        value={user.schoolName}
        required
      />
    </div>
  );
}
