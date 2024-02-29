import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ChangeMode,
  HandleSystemSettings,
} from "../../types/interfaces/redux/slices";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    useSystemSettings: true,
    darkMode: "light",
  },
  reducers: {
    handleSystemSettings: (
      state,
      action: PayloadAction<HandleSystemSettings>
    ) => {
      state.useSystemSettings = action.payload.useSystemSettings;
    },
    changeMode: (state, action: PayloadAction<ChangeMode>) => {
      state.darkMode = action.payload.darkMode;
    },
  },
});

export const settingsReducer = settingsSlice.reducer;
export const { handleSystemSettings, changeMode } = settingsSlice.actions;
