interface props {
  header: string;
  children: React.ReactNode
}
export default function Card({ header, children }: props) {
  return (
    <div className="card">
      <h2 className="cardHeader">{header}</h2>
      {children}
    </div>
  )
}
