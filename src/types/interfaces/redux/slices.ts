import { Errors } from "../components/interfaces";
import { User } from "../hooks/useSelectors";

// settings slice
enum DarkMode {
  light = "light",
  dark = "dark",
}
export interface HandleSystemSettings {
  useSystemSettings: boolean;
}
export interface ChangeMode {
  darkMode: keyof typeof DarkMode;
}

// user slice
export interface AddUserPayload {
  addUser: User | null;
}
export interface RemoveUserPayload {
  addUser: null;
}

// form actions
export interface HandlePasswordVisibility {
  hidePassword: boolean;
}
export interface HandleFormErrors {
  errors: Errors;
}
export interface HandleFormValidity {
  isFormValid: boolean;
}
export interface HandleValidation {
  triggerValidation: boolean;
}
