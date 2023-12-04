import emailIcon from "/email-svgrepo-com.svg?url"
interface props {
  email: string;
}
export default function Email({ email }: props) {
  return (
    <div className="contactInfo">
      <img className="contactIcon" src={emailIcon} />
      <span >{email}</span>
    </div>
  )
}
