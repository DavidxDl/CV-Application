interface props {
  email: string;
}
export default function Email({ email }: props) {
  return (
    <div className="contactInfo">
      <img className="contactIcon" src="../../public/email-svgrepo-com.svg" />
      <span >{email}</span>
    </div>
  )
}
