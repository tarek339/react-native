import {View} from 'react-native';
import {Font, FormButton, HeaderText, Input} from '../../components';
import useFormActions from '../../hooks/useFormActions';
import {
  errorField,
  header,
  resetInput,
  resetView,
} from '../../assets/theme/styles';
import useSelectors from '../../hooks/useSelector';
import useDispatches from '../../hooks/useDispatches';
import {useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Navigate} from '../../types/types';

const ResetPassword = () => {
  const {
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    handlePassIcons,
    handleConfPassIcons,
    handleHidePassword,
    validateForm,
    reset,
  } = useFormActions();
  const {errors, isFormValid, triggerValidation} = useSelectors();
  const {startValidation, stopValidation, formNotValid} = useDispatches();
  const navigation: Navigate = useNavigation();

  useEffect(() => {
    if (triggerValidation) {
      validateForm();
    }
  }, [password, confirmPassword, triggerValidation]);

  const onSubmit = async () => {
    try {
      startValidation();
      if (isFormValid) {
        const res = await axios.post(`/users/forgot-password-handler`, {
          password,
          confirmPassword,
          // token: AsyncStorage.getItem("token"),
        });
        const data = res.data;
        if (data?.message) {
          navigation.navigate('Authentication');
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
        <HeaderText title={'Reset password'} />
      </View>
      <View style={resetInput.container}>
        <Input
          label={'New password'}
          value={password}
          onChangeText={password => setPassword(password)}
          icon={handlePassIcons}
          disabledIcon={!password && true}
          onPressIcon={handleHidePassword}
        />
        {errors?.password ? (
          <Font style={errorField.text} title={errors?.password} />
        ) : null}

        <Input
          label={'Confirm passwirs'}
          value={confirmPassword}
          onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
          icon={handleConfPassIcons}
          disabledIcon={!confirmPassword && true}
          onPressIcon={handleHidePassword}
        />
        {errors?.confirmPassword ? (
          <Font style={errorField.text} title={errors?.confirmPassword} />
        ) : null}

        <FormButton onPress={onSubmit} title={'Reset'} />
      </View>
    </View>
  );
};

export default ResetPassword;
