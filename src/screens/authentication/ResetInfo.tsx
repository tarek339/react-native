import { View } from "react-native";
import React from "react";
import { verifyInfo } from "../../assets/theme/styles/authentication";
import { HeaderText } from "../../components";

const ResetInfo = () => {
  return (
    <View style={verifyInfo.container}>
      <HeaderText
        title={
          "We've sent you an email to reset your password. Please check your inbox."
        }
      />
    </View>
  );
};

export default ResetInfo;
