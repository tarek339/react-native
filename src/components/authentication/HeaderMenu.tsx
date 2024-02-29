import { View } from "react-native";
import Font from "../parents/fonts/Font";
import MenuButton from "./MenuButton";
import { menu, menuChildren } from "../../assets/theme/styles";
import { HeaderMenuProps } from "../../types/interfaces/components/interfaces";
import useDarkMode from "../../hooks/useDarkMode";

const HeaderMenu = ({
  scrollLeft,
  scrollRight,
  firstBtnColor,
  secondBtnColor,
}: HeaderMenuProps) => {
  const { colors } = useDarkMode();

  return (
    <View style={[menu.container, { backgroundColor: colors.bgSecondary }]}>
      <View style={menuChildren.logo}>
        <Font title={"LOGO"} />
      </View>
      <View style={menuChildren.button}>
        <MenuButton
          onPress={scrollLeft}
          buttonColor={firstBtnColor}
          title={"Sign in"}
        />
        <MenuButton
          onPress={scrollRight}
          buttonColor={secondBtnColor}
          title={"Sign up"}
        />
      </View>
    </View>
  );
};

export default HeaderMenu;
