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
        <button className="key" onClick={handleClick}></button>
        <button className="key big"></button>
      </li>
    </>
  );
}
