import { useDispatch, useSelector } from "react-redux";
import * as ac from "../../features/phone/redux/phone.slice";
import { AppDispatch, RootState } from "../../core/store/store";

export function usePhone() {
  const { phoneNumber } = useSelector((state: RootState) => state.phone);
  const dispatch: AppDispatch = useDispatch();

  const dial = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "delete"];

  function handleAdd(value: string) {
    if (phoneNumber.length < 9) {
      dispatch(ac.add(value));
    }
  }

  return {
    display: phoneNumber,
    handleAdd,
    dial,
  };
}
