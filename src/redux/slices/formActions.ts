import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  HandleFormErrors,
  HandleFormValidity,
  HandlePasswordVisibility,
  HandleValidation,
} from "../../types/interfaces/redux/slices";

const formActionsSlice = createSlice({
  name: "formActions",
  initialState: {
    hidePassword: true,
    errors: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    isFormValid: false,
    triggerValidation: false,
  },
  reducers: {
    handlePasswordVisibility: (
      state,
      action: PayloadAction<HandlePasswordVisibility>
    ) => {
      state.hidePassword = action.payload.hidePassword;
    },
    handleFormErrors: (state, action: PayloadAction<HandleFormErrors>) => {
      state.errors = action.payload.errors;
    },
    handleFormValidity: (state, action: PayloadAction<HandleFormValidity>) => {
      state.isFormValid = action.payload.isFormValid;
    },
    handleValidation: (state, action: PayloadAction<HandleValidation>) => {
      state.triggerValidation = action.payload.triggerValidation;
    },
  },
});

export const formActionsReducer = formActionsSlice.reducer;
export const {
  handlePasswordVisibility,
  handleFormErrors,
  handleFormValidity,
  handleValidation,
} = formActionsSlice.actions;
