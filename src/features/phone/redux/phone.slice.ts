import { createSlice } from "@reduxjs/toolkit";

export type PhonesState = {
  phoneNumber: string;
};

const initialState: PhonesState = {
  phoneNumber: "",
};

export const slicePhone = createSlice({
  name: "phone",
  initialState,
  reducers: {
    add: (state, { payload }) => ({
      ...state,
      phoneNumber: state.phoneNumber + payload,
    }),
  },
});

export const { add } = slicePhone.actions;
export default slicePhone.reducer;
