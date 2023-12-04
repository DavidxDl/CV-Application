import phoneIcon from "/phone-svgrepo-com.svg?url"
interface props {
  phone: string;
}
export default function Phone({ phone }: props) {
  return (
    <div className="contactInfo">
      <img className="contactIcon" src={phoneIcon} />
      <span>{phone}</span>
    </div>
  )
}
