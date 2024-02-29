import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { settingsReducer } from "./slices/settings";
import { formActionsReducer } from "./slices/formActions";

export const store = configureStore({
  reducer: {
    user: userReducer,
    settings: settingsReducer,
    formActions: formActionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
