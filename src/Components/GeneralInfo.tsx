import "../styles/GeneralInfo.css";

function GeneralInfo() {
  return (
    <section>
      <h2>Contact</h2>
      <form className="generalInfo">
        <div className="nameInput">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" required />
        </div>
        <div className="emailInput">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" required />
        </div>
        <div className="phoneInput">
          <label htmlFor="phone">Phone: </label>
          <input type="tel" id="phone" required />
        </div>
        <div className="submitBtn">
          <input className="submitBtn" type="submit" value="Next" />
        </div>
      </form>
    </section>
  );
}

export default GeneralInfo;
