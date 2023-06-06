import { useContext } from "react";
import { usePhone } from "../../../../core/hook/use.Phone";

type PropsType = {
  item: string;
};

export function Key({ item }: PropsType) {
  const { handleAdd } = usePhone();

  function handleClick() {
    handleAdd(item);
  }

  return (
    <>
      <li>
        {item !== "delete" ? (
          <button className="key" onClick={handleClick}>
            {item}
          </button>
        ) : (
          <button className="key big">{item}</button>
        )}
      </li>
    </>
  );
}
