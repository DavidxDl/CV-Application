import person from "../interfaces/person";
import { v4 as uuid } from "uuid";

export const defaultUser: person = {
  name: "Hayley",
  lastName: "Stone",
  profession: "Frontend Dev",
  email: "HayleyStone@gmail.com",
  phone: "+1-555-505-444",
  aboutMe:
    "Diligent software engineer with 5+ years of experience in commercial application and software development. Eager to join Cyclone Inc. to build innovative and cutting-edge business solutions for the impressive suite of clients within its global reach. In previous roles, slashed downtime by 25% and ensured 98% on-time project completion. Also identified and dealt with a significant process bottleneck that boosted coding efficiency by 35% when resolved.",

  education: [
    {
      id: uuid(),
      schoolName: "Harvard",
      studyDate: "05/7/2020",
      studyTitle: "Web Design",
    }
  ],

  experience: [
    {
      id: uuid(),
      positionTitle: "Desing Leader",
      workedTime: "2014 / 2019",
      companyName: "CD PROJECT RED",
      mainResponsibilities: "",
    }
  ]
}
