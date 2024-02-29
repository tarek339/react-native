import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { User } from "../types/interfaces/hooks/useSelectors";

const useSelectors = () => {
  // settings
  const useSystemSettings = useSelector(
    (state: RootState) => state.settings.useSystemSettings
  );
  const darkMode = useSelector((state: RootState) => state.settings.darkMode);

  // user
  const user: User | null = useSelector(
    (state: RootState) => state.user.user
  ) as User | null;
  const emailVerified: boolean = user?.emailVerified ?? false;

  // form actions
  const isHidePassword = useSelector(
    (state: RootState) => state.formActions.hidePassword
  );
  const errors = useSelector((state: RootState) => state.formActions.errors);
  const isFormValid = useSelector(
    (state: RootState) => state.formActions.isFormValid
  );
  const triggerValidation = useSelector(
    (state: RootState) => state.formActions.triggerValidation
  );

  return {
    useSystemSettings,
    darkMode,
    user,
    emailVerified,
    isHidePassword,
    errors,
    isFormValid,
    triggerValidation,
  };
};

export default useSelectors;
