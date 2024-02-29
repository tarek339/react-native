import { useDispatch } from "react-redux";
import { changeMode, handleSystemSettings } from "../redux/slices/settings";
import { addUser } from "../redux/slices/userSlice";
import { AxiosResponse } from "axios";
import {
  handleFormErrors,
  handleFormValidity,
  handlePasswordVisibility,
  handleValidation,
} from "../redux/slices/formActions";
import { Errors } from "../types/interfaces/components/interfaces";

const useDispatches = () => {
  const dispatch = useDispatch();

  // settings
  const enableSystemSettings = () =>
    dispatch(handleSystemSettings({ useSystemSettings: true }));
  const disableSystemSettings = () =>
    dispatch(handleSystemSettings({ useSystemSettings: false }));

  const enableDarkMode = () => dispatch(changeMode({ darkMode: "dark" }));

  const disableDarkMode = () => dispatch(changeMode({ darkMode: "light" }));

  // user
  const dispatchUser = (resData: AxiosResponse<any, any> | null) =>
    dispatch(addUser(resData));

  // form actions
  const hidePassword = () =>
    dispatch(handlePasswordVisibility({ hidePassword: true }));

  const showPassword = () =>
    dispatch(handlePasswordVisibility({ hidePassword: false }));

  const formValid = () => dispatch(handleFormValidity({ isFormValid: true }));
  const formNotValid = () =>
    dispatch(handleFormValidity({ isFormValid: false }));

  const startValidation = () =>
    dispatch(handleValidation({ triggerValidation: true }));
  const stopValidation = () =>
    dispatch(handleValidation({ triggerValidation: false }));

  const dispatchErrors = (errors: Errors) =>
    dispatch(handleFormErrors({ errors }));

  return {
    enableSystemSettings,
    disableSystemSettings,
    enableDarkMode,
    disableDarkMode,
    dispatchUser,
    hidePassword,
    showPassword,
    formValid,
    formNotValid,
    startValidation,
    stopValidation,
    dispatchErrors,
  };
};

export default useDispatches;
