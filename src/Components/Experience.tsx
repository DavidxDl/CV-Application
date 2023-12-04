import { experience } from "../interfaces/person";

interface props {
  experiences: experience[];
}

export default function Experience({ experiences }: props) {
  return (
    <div className="cvExperience">
      <h2 >Experience</h2>
      {experiences.map(experience => (
        <ul key={experience.id} className="experience">
          <h3>{experience.companyName}</h3>
          <li>Position: {experience.positionTitle}</li>
          <li>Responsibility: {experience.mainResponsibilities}</li>
          <li>Work Time: {experience.workedTime}</li>
        </ul>
      ))}
    </div>
  )
}
