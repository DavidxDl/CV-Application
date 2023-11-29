import person from "../interfaces/person";

interface props {
  user: person;
  label: string;
  inputFor: string;
  onChange: (person: person) => void;
  type: string;
  value: string;
}

export default function Input({
  type,
  onChange,
  label,
  inputFor,
  user,
  value,
}: props) {
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
        type={type}
        id={inputFor}
        value={value}
        required
      />
    </div>
  );
}
