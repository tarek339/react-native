import { useColorScheme } from "react-native";
import { TStatusBar } from "../types/types";
import { Colors } from "../assets/types/interfaces/interfaces";
import { colorHolder } from "../assets/theme/colors/colorHolder";
import { defaultColors } from "../assets/theme/colors/colors";
import useSelectors from "./useSelector";

let colors: Colors = {
  ...defaultColors,
};

const useDarkMode = () => {
  const { useSystemSettings, darkMode } = useSelectors();
  const colorScheme = useColorScheme();

  const onChangeMode = () => {
    if (
      (useSystemSettings && colorScheme === "dark") ||
      (!useSystemSettings && darkMode === "dark")
    ) {
      colors = {
        background: colorHolder.background.dark,
        bgSecondary: colorHolder.bgSecondary.dark,
        text: colorHolder.text.dark,
        input: colorHolder.input.dark,
        inputFocused: colorHolder.inputFocused.dark,
        inputText: colorHolder.inputText.dark,
        selection: colorHolder.selection.dark,
        formButton: colorHolder.formButton.dark,
        formBtnText: colorHolder.formBtnText.dark,
        button: colorHolder.button.dark,
        buttonFocused: colorHolder.buttonFocused.dark,
        buttonText: colorHolder.buttonText.dark,
      };
    } else {
      colors = defaultColors;
    }
  };

  const system = colorScheme === "dark" ? "light-content" : "dark-content";
  const noSystem =
    darkMode === "light" && !useSystemSettings
      ? "dark-content"
      : "light-content";
  const statusBar: TStatusBar = useSystemSettings ? system : noSystem;

  onChangeMode();

  return {
    statusBar,
    colors,
  };
};
export default useDarkMode;
