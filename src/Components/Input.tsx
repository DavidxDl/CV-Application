interface props {
  label: string;
  inputFor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
}

export default function Input({
  type,
  onChange,
  label,
  inputFor,
  value,
}: props) {
  return (
    <div className={inputFor}>
      <label htmlFor={inputFor}>{label}</label>
      <input
        onChange={onChange}
        type={type}
        id={inputFor}
        value={value}
        required
      />
    </div>
  );
}
