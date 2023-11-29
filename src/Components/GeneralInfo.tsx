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
          onChange={onChange}
          type="text"
          user={user}
          value={user.name}
        />
        <Input
          inputFor="email"
          label="Email :"
          onChange={onChange}
          type="email"
          user={user}
          value={user.email}
        />
        <Input
          type="tel"
          inputFor="phone"
          label="Phone :"
          onChange={onChange}
          user={user}
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
