import { Key } from "../key/key";
import { usePhone } from "../../../../core/hook/use.Phone";

export function Keyboard() {
  const { dial } = usePhone();

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {dial.map((item) => (
          <Key key={item} item={item}></Key>
        ))}
      </ol>
    </div>
  );
}
