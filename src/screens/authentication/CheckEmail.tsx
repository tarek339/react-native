import { View } from "react-native";
import { Font, FormButton, HeaderText, Input } from "../../components";
import useFormActions from "../../hooks/useFormActions";
import {
  errorField,
  header,
  resetInput,
  resetView,
} from "../../assets/theme/styles";
import useSelectors from "../../hooks/useSelector";
import useDispatches from "../../hooks/useDispatches";
import { useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Navigate } from "../../types/types";

const CheckEmail = () => {
  const { email, setEmail, validateForm, reset } = useFormActions();
  const { errors, isFormValid, triggerValidation } = useSelectors();
  const { startValidation, stopValidation, formNotValid } = useDispatches();
  const navigation: Navigate = useNavigation();

  useEffect(() => {
    if (triggerValidation) {
      validateForm();
    }
  }, [email, triggerValidation]);

  const onSubmit = async () => {
    try {
      startValidation();
      if (isFormValid) {
        const res = await axios.post(`/users/forgot-password-email`, {
          email,
        });
        const data = res.data;
        if (data?.message) {
          navigation.navigate("ResetInfo");
          stopValidation();
          reset();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={resetView.container}>
      <View style={header.container}>
        <HeaderText title={"Send Email"} />
      </View>
      <View style={resetInput.container}>
        <Input
          label={"Email"}
          value={email}
          onChangeText={(email) => setEmail(email)}
          icon={!email ? "" : "close-box-outline"}
          disabledIcon={!email && true}
          onPressIcon={() => setEmail("")}
        />
        {errors?.email ? (
          <Font style={errorField.text} title={errors?.email} />
        ) : null}

        <FormButton onPress={onSubmit} title={"Submit"} />
        <FormButton onPress={() => navigation.goBack()} title={"Go back"} />
      </View>
    </View>
  );
};

export default CheckEmail;
