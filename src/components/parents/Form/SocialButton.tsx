import React from "react";
import { Button } from "react-native-paper";
import { SocialButtonProps } from "../../../types/interfaces/components/interfaces";
import { formButton } from "../../../assets/theme/styles";

const SocialButton = ({
  icon,
  mode,
  onPress,
  title,
  buttonColor,
  textColor,
}: SocialButtonProps) => {
  return (
    <Button
      style={formButton.container}
      icon={icon}
      mode={mode}
      onPress={onPress}
      contentStyle={{
        padding: 3,
        display: "flex",
        gap: -9,
      }}
      textColor={textColor}
      uppercase
      buttonColor={buttonColor}
    >
      {title}
    </Button>
  );
};

export default SocialButton;
