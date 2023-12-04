import person from "../interfaces/person";

interface props {
  user: person;
  onChange: (user: person) => void;
  display: boolean;
  handleForm: (index: number) => void;
}
export default function AboutMeForm({ handleForm, user, onChange, display }: props) {
  if (display)
    return (
      <section className="card">
        <h2 className="cardHeader">About Me</h2>
        <form className="generalInfo">
          <label htmlFor="aboutMe" hidden>About Me</label>
          <textarea id="aboutMe" value={user.aboutMe} className="aboutMeInput"
            onChange={(e) => onChange(
              {
                ...user,
                experience: [...user.experience],
                education: [...user.education],
                aboutMe: e.target.value
              })} />
          <div className="submitBtn">
            <input onClick={() => handleForm(-1)} type="button" value="Close" className="closeBtn" />
          </div>
        </form>
      </section>
    )
}
