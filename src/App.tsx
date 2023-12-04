import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import person from "./interfaces/person";
import { defaultUser } from "./Data/DefaultUser";
import Cv from "./Components/Cv";

function App() {
  const [user, setUser] = useState<person>(defaultUser);


  function handleChange(object: person) {
    setUser(object)
  }
  return (
    <>
      <Header />
      <main>
        <Cv user={user} onChange={handleChange} />
      </main>
    </>
  );
}

export default App;

/*
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
*/
