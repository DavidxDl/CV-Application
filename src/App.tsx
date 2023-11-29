import { useState } from "react";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import Header from "./Components/Header";
import person from "./interfaces/person";
import EducationInfo from "./Components/EducationInfo";

function App() {
  const [user, setUser] = useState<person>({
    name: "",
    email: "",
    phone: "",
    schoolName: "",
    studyDate: "",
    positionTitle: "",
    workedTime: "",
    companyName: "",
    mainResponsibilities: "",
    studyTitle: "",
  });
  const [formIndex, setFormIndex] = useState(0);

  function handleChange(object: person) {
    setUser(object);
  }
  function handleForm(index: number) {
    setFormIndex(index);
  }
  return (
    <>
      <Header />
      <main>
        <GeneralInfo
          user={user}
          onChange={handleChange}
          display={formIndex === 0}
          handleForm={handleForm}
        />
        <EducationInfo
          user={user}
          onChange={handleChange}
          display={formIndex === 1}
          handleForm={handleForm}
        />
      </main>
    </>
  );
}

export default App;
