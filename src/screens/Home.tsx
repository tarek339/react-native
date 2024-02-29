import React from "react";
import { Button, View } from "react-native";
import { HeaderText, withRestrictions } from "../components";
import { Navigate } from "../types/types";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation: Navigate = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <HeaderText title={"Home"} />
      <Button
        onPress={() => navigation.navigate("Authentication")}
        title="logout"
      />
    </View>
  );
};

export default withRestrictions(Home);
