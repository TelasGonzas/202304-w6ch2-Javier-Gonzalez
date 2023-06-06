import { usePhone } from "../../../../core/hook/use.Phone";

export function Display() {
  const { display } = usePhone();

  return <span className="number">{display}</span>;
}
