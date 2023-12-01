import { useState } from "react";
import "./App.css";
import GeneralInfoForm from "./Components/GeneralInfoForm";
import Header from "./Components/Header";
import person from "./interfaces/person";
import EducationInfoForm from "./Components/EducationInfoForm";
import WorkInfoForm from "./Components/WorkInfoForm";
import { Forms } from "./interfaces/forms";
import { defaultUser } from "./Data/DefaultUser";

function App() {
  const [user, setUser] = useState<person>(defaultUser);
  const [formIndex, setFormIndex] = useState(Forms.GeneralInfo);


  function handleChange(object: person) {
    setUser(object)
  }
  function handleForm(index: number) {
    setFormIndex(index);
  }
  return (
    <>
      <Header />
      <main>
        <GeneralInfoForm
          user={user}
          onChange={handleChange}
          display={formIndex === Forms.GeneralInfo}
          handleForm={handleForm}
        />
        <EducationInfoForm
          user={user}
          onChange={handleChange}
          display={formIndex === Forms.EducationInfo}
          handleForm={handleForm}
        />
        <WorkInfoForm
          handleForm={handleForm}
          user={user}
          onChange={handleChange}
          display={formIndex === Forms.WorkInfo}
        />
      </main>
    </>
  );
}

export default App;
