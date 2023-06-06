import phoneReducer, { PhonesState, add } from "./phone.slice";

describe("phone reducer", () => {
  const initialState: PhonesState = {
    phoneNumber: "",
  };

  test("should handle initial state", () => {
    expect(phoneReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  test("should handle incrementByAmount", () => {
    const actual = phoneReducer(initialState, add(2));
    expect(actual.phoneNumber).toEqual("2");
  });
});
