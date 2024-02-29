import { Dimensions, Platform } from "react-native";
import { Breakpoints, IDimensions } from "../types/interfaces/interfaces";

export const breakpoints: Breakpoints = {
  base: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1280,
};

export const { fontScale, scale, width, height }: IDimensions =
  Dimensions.get("screen");

export const android: boolean = Platform.OS === "android";
export const ios: boolean = Platform.OS === "ios";
