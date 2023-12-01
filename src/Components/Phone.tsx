interface props {
  phone: string;
}
export default function Phone({ phone }: props) {
  return (
    <div className="contactInfo">
      <img className="contactIcon" src="../../public/phone-svgrepo-com.svg" />
      <span>{phone}</span>
    </div>
  )
}
