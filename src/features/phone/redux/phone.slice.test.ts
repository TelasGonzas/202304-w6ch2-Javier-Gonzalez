import phoneReducer, { PhonesState } from "./phone.slice";

describe("phone reducer", () => {
  const initialState: PhonesState = {
    phoneNumber: "",
  };
  test("should handle initial state", () => {
    expect(phoneReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });
});
