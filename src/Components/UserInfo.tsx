import { Forms } from "../interfaces/forms";
import person from "../interfaces/person";
import DisplayCategory from "./DisplayCategory";

interface props {
  user: person;
}


export default function UserInfo({ user }: props) {
  return (
    <div className="UserInfo">
      <DisplayCategory category={Forms.GeneralInfo} user={user} />
      <DisplayCategory category={Forms.EducationInfo} user={user} />
      <DisplayCategory category={Forms.WorkInfo} user={user} />
    </div>
  )
}
