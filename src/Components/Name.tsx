interface props {
  name: string;
}
export default function Name({ name }: props) {
  return <h2 id="profileName">{name}</h2>

}
