import { Button, View } from "react-native";
import { HeaderText, withRestrictions } from "../components";
import useDispatches from "../hooks/useDispatches";

const Settings = () => {
  const {
    enableSystemSettings,
    disableSystemSettings,
    enableDarkMode,
    disableDarkMode,
  } = useDispatches();
  return (
    <View>
      <HeaderText title={"Handle system settings"} />
      <Button title="enable" onPress={() => enableSystemSettings()} />
      <Button title="disable" onPress={() => disableSystemSettings()} />
      <HeaderText title={"Set Mode"} />
      <Button title="dark" onPress={() => enableDarkMode()} />
      <Button title="light" onPress={() => disableDarkMode()} />
    </View>
  );
};
export default withRestrictions(Settings);
