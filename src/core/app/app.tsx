import { Actions } from "./components/actions";
import { Info } from "./components/info";
import { Keyboard } from "./components/keyboard";

export default function App() {
  return (
    <>
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </>
  );
}
