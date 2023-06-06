import { useContext } from "react";
import { Key } from "./key";
import { PhoneC}

export function Keyboard() {
  const {
    phoneContext: { keyValue },
  } = useContext(PhoneContext);

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyValue.map((item) => (
          <Key key={item} item={item}></Key>
        ))}
      </ol>
    </div>
  );
}
