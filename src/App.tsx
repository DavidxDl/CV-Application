import { useState } from "react";
import "./App.css";
import GeneralInfo from "./Components/GeneralInfo";
import Header from "./Components/Header";
import person from "./interfaces/person";

function App() {
  const [user, setUser] = useState<person>({ name: "", email: "", phone: "" });
  const [formIndex, setFormIndex] = useState(0);

  function handleChange(object: person) {
    setUser(object);
  }
  return (
    <>
      <Header />
      <main>
        <GeneralInfo user={user} onChange={handleChange} />
      </main>
    </>
  );
}

export default App;
