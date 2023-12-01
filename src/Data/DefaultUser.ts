import person from "../interfaces/person";

export const defaultUser: person = {
  name: "Hayley",
  lastName: "Stone",
  profession: "Frontend Dev",
  email: "HayleyStone@gmail.com",
  phone: "+1-555-505-444",

  education: [
    {
      id: 0,
      schoolName: "Harvard",
      studyDate: "05/7/2020",
      studyTitle: "Web Design",
    }
  ],

  experience: [
    {
      id: 1,
      positionTitle: "Desing Leader",
      workedTime: "2014 / 2019",
      companyName: "CD PROJECT RED",
      mainResponsibilities: "",
    }
  ]
}
