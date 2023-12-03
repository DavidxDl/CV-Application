import { schooles } from "../interfaces/person";

interface props {
  education: schooles[];
}

export default function Educaiton({ education }: props) {
  return (
    <div className="cvEducation">
      <h2>Education</h2>
      {education.map(edu => (
        <ul key={edu.id} className="education">
          <h3>{edu.schoolName}</h3>
          <li>Title: {edu.studyTitle}</li>
          <li>Date: {edu.studyDate}</li>
        </ul>
      ))}

    </div>
  )
}
