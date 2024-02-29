import React from "react";
import { Text } from "react-native";
import { FontProps } from "../../../types/interfaces/components/interfaces";

const Font = ({ title, style }: FontProps) => {
  return <Text style={style}>{title}</Text>;
};

export default Font;
