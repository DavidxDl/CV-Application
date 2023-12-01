import person from "../interfaces/person";
import "../styles/GeneralInfo.css";
import Input from "./Input";

interface props {
  user: person;
  onChange: (object: person) => void;
  display: boolean;
  handleForm: (index: number) => void;
}

function GeneralInfo({ user, onChange, display, handleForm }: props) {
  if (!display) return;
  return (
    <section className="card">
      <h2 className="cardHeader">Contact</h2>
      <form
        className="generalInfo"
        onSubmit={(e) => {
          e.preventDefault();
          handleForm(1);
        }}
      >
        <Input
          inputFor="name"
          label="Name: "
          onChange={(e) => onChange({ ...user, name: e.target.value })}
          type="text"
          value={user.name}
        />
        <Input
          inputFor="lastName"
          label="Last Name: "
          onChange={(e) => onChange({ ...user, lastName: e.target.value })}
          type="text"
          value={user.lastName}
        />
        <Input
          inputFor="profession"
          label="Profession : "
          onChange={(e) => onChange({ ...user, profession: e.target.value })}
          type="text"
          value={user.profession}
        />
        <Input
          inputFor="email"
          label="Email :"
          onChange={(e) => onChange({ ...user, email: e.target.value })}
          type="email"
          value={user.email}
        />
        <Input
          type="tel"
          inputFor="phone"
          label="Phone :"
          onChange={(e) => onChange({ ...user, phone: e.target.value })}
          value={user.phone}
        />
        <div className="submitBtn">
          <input className="submitBtn" type="submit" value="Next" />
        </div>
      </form>
    </section>
  );
}

export default GeneralInfo;
