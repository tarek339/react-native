import { Dimensions, StyleSheet } from "react-native";
import { breakpoints } from "../breakpoints";

const { width } = Dimensions.get("screen");

export const scrollViewChild = StyleSheet.create({
  container: {
    gap: 10,
    width: width,
    padding: 15,
  },
});

export const menu = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export const menuChildren = StyleSheet.create({
  // shadowProps: {
  // shadowColor: "#333333",
  // shadowOffset: { width: 0, height: 6 },
  // shadowOpacity: 0.3,
  // shadowRadius: 4,
  // elevation: 10,
  // },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },
});

export const button = StyleSheet.create({
  container: {
    borderRadius: 4,
    width: "40%",
  },
});

export const header = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 20,
    paddingTop: 10,
  },
});

export const verifyInfo = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
});

export const resetView = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    marginBottom: 300,
  },
});

export const resetInput = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 20,
  },
});
