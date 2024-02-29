import { button } from "../../assets/theme/styles";
import { Button } from "react-native-paper";
import { MenuButtonProps } from "../../types/interfaces/components/interfaces";
import useDarkMode from "../../hooks/useDarkMode";

const MenuButton = ({ onPress, buttonColor, title }: MenuButtonProps) => {
  const { colors } = useDarkMode();

  return (
    <>
      <Button
        style={button.container}
        textColor={colors.buttonText}
        uppercase
        onPress={onPress}
        buttonColor={buttonColor}
        rippleColor="transparent"
      >
        {title}
      </Button>
    </>
  );
};

export default MenuButton;
