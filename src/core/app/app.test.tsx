import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./app";
import { Actions } from "../../features/phone/components/actions/actions";
import { Info } from "../../features/phone/components/info/info";
import { Keyboard } from "../../features/phone/components/keyboard/keyboard";

jest.mock("../../features/phone/components/actions/actions");
jest.mock("../../features/phone/components/info/info");
jest.mock("../../features/phone/components/keyboard/keyboard");

test("renders learn react link", () => {
  const { getByRole } = render(<App />);

  expect(getByRole("main")).toBeInTheDocument();
  expect(Actions).toHaveBeenCalled();
  expect(Info).toHaveBeenCalled();
  expect(Keyboard).toHaveBeenCalled();
});
