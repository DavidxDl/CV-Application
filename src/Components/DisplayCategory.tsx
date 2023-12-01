import { Forms } from "../interfaces/forms"
import person from "../interfaces/person"

interface DisplayCategoryProps { category: Forms, user: person }

export default function DisplayCategory({ category, user }: DisplayCategoryProps) {
  switch (category) {
    case Forms.GeneralInfo:
      return (
        <div className="InfoCategory">
          <h2 className="cardHeader">General Info</h2>
          <h3>Name: {user.name}</h3>
          <h3>Email: {user.email}</h3>
          <h3>Phone: {user.phone}</h3>
        </div>
      )
    case Forms.EducationInfo:
      return (
        <div className="InfoCategory">
          <h2 className="cardHeader">Education Info</h2>
          {user.education.map(edu => {
            return (
              <div className="cardInfo">
                <h3>School Name: {edu.schoolName}</h3>
                <h3>Study Title: {edu.studyTitle}</h3>
                <h3>Study Date: {edu.studyDate}</h3>
                <hr />
              </div>
            )
          })}
        </div>
      )
    case Forms.WorkInfo:
      return (
        <div className="InfoCategory">
          <h2 className="cardHeader">Work Info</h2>

          {user.experience.map(work => {
            return (
              <div className="cardInfo">
                <h3>Company Name: {work.companyName}</h3>
                <h3>Position Title: {work.positionTitle}</h3>
                <h3>Main Responsibility: {work.mainResponsibilities}</h3>
                <h3>Worked Time: {work.workedTime}</h3>
                <hr />
              </div>
            )
          })}
        </div>
      )
  }
}
