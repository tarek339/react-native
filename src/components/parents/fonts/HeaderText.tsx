import React from "react";
import { Text } from "react-native-paper";
import { FontProps } from "../../../types/interfaces/components/interfaces";
import { text } from "../../../assets/theme/styles";
import useDarkMode from "../../../hooks/useDarkMode";

const HeaderText = ({ title }: FontProps) => {
  const { colors } = useDarkMode();
  return <Text style={[text.header, { color: colors.text }]}>{title} </Text>;
};

export default HeaderText;
