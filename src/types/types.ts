import { StackNavigationProp } from "@react-navigation/stack";

export type TStatusBar = "light-content" | "dark-content";

enum ScreenNames {
  Home = "Home",
  Authentication = "Authentication",
  Settings = "Settings",
  VerifyAccount = "VerifyAccount",
  VerifyInfo = "VerifyInfo",
  ResetPassword = "ResetPassword",
  CheckEmail = "CheckEmail",
  ResetInfo = "ResetInfo",
}

type RootStackParamList = {
  Home: undefined;
  Authentication: undefined;
  Settings: undefined;
  VerifyAccount: undefined;
  VerifyInfo: undefined;
  ResetPassword: undefined;
  CheckEmail: undefined;
  ResetInfo: undefined;
};

export type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};
export type AuthenticationProps = {
  navigation: StackNavigationProp<RootStackParamList, "Authentication">;
};
export type SettingsProps = {
  navigation: StackNavigationProp<RootStackParamList, "Settings">;
};
export type VerifyAccountProps = {
  navigation: StackNavigationProp<RootStackParamList, "VerifyAccount">;
};
export type VerifyInfoProps = {
  navigation: StackNavigationProp<RootStackParamList, "VerifyInfo">;
};
export type ResetPasswordProps = {
  navigation: StackNavigationProp<RootStackParamList, "ResetPassword">;
};
export type CheckEmailProps = {
  navigation: StackNavigationProp<RootStackParamList, "CheckEmail">;
};
export type ResetInfoProps = {
  navigation: StackNavigationProp<RootStackParamList, "ResetInfo">;
};

export type Navigate = {
  navigate: (screen: keyof typeof ScreenNames) => void;
  goBack: () => void;
};
