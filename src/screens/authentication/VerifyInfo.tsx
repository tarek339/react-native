import { View } from "react-native";
import React from "react";
import { verifyInfo } from "../../assets/theme/styles/authentication";
import { HeaderText, withRestrictions } from "../../components";

const VerifyInfo = () => {
  return (
    <View style={verifyInfo.container}>
      <HeaderText
        title={
          "Thanks for signing up! We've sent you an email for verification. Please check your inbox."
        }
      />
    </View>
  );
};

export default withRestrictions(VerifyInfo);
