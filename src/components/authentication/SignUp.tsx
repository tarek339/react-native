import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View} from 'react-native';
import {errorField, header} from '../../assets/theme/styles';
import useDarkMode from '../../hooks/useDarkMode';
import {useNavigation} from '@react-navigation/native';
import {Navigate} from '../../types/types';
import useDispatches from '../../hooks/useDispatches';
import useFormActions from '../../hooks/useFormActions';
import useSelectors from '../../hooks/useSelector';
import {
  Font,
  FormButton,
  HeaderText,
  Input,
  SocialButton,
  Divider,
} from '../parents';

const SignUp = () => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    reset,
    handleHidePassword,
    handlePassIcons,
    handleConfPassIcons,
    validateForm,
  } = useFormActions();
  const {isHidePassword, errors, isFormValid, triggerValidation} =
    useSelectors();
  const {startValidation, stopValidation, dispatchUser, formNotValid} =
    useDispatches();
  const {colors} = useDarkMode();
  const navigation: Navigate = useNavigation();

  const [message, setMessage] = useState('');

  const onSubmit = () => {
    startValidation();
  };

  const submitData = async () => {
    try {
      console.log('submit start');
      const res = await axios.post(`/users/sign-up`, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      const data = res.data;
      setMessage(data.errorMessage);
      reset();
      if (data?.registerMessage) {
        dispatchUser(data.user);
        navigation.navigate('VerifyInfo');
        console.log('submit end');
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (triggerValidation) {
      validateForm();
    }
    if (isFormValid) {
      stopValidation();
      submitData();
      formNotValid();
    }
  }, [
    isFormValid,
    triggerValidation,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  ]);

  return (
    <>
      <View style={header.container}>
        <HeaderText title={'Register'} />
      </View>

      <Input
        label={'First name'}
        value={firstName}
        onChangeText={firstName => setFirstName(firstName)}
        icon={!firstName ? '' : 'close-box-outline'}
        disabledIcon={!firstName && true}
        onPressIcon={() => setFirstName('')}
      />
      {errors?.firstName ? (
        <Font style={errorField.text} title={errors?.firstName} />
      ) : null}

      <Input
        label={'Last name'}
        value={lastName}
        onChangeText={lastName => setLastName(lastName)}
        icon={!lastName ? '' : 'close-box-outline'}
        disabledIcon={!lastName && true}
        onPressIcon={() => setLastName('')}
      />
      {errors?.lastName ? (
        <Font style={errorField.text} title={errors?.lastName} />
      ) : null}

      <Input
        label={'Email'}
        value={email}
        onChangeText={email => {
          setEmail(email);
          setMessage('');
        }}
        icon={!email ? '' : 'close-box-outline'}
        disabledIcon={!email && true}
        onPressIcon={() => setEmail('')}
      />
      {errors?.email ? (
        <Font style={errorField.text} title={errors?.email} />
      ) : message ? (
        <Font style={errorField.text} title={message} />
      ) : null}

      <Input
        label={'Password'}
        value={password}
        onChangeText={password => setPassword(password)}
        icon={handlePassIcons}
        disabledIcon={!password && true}
        onPressIcon={handleHidePassword}
        secureTextEntry={isHidePassword}
      />
      {errors?.password ? (
        <Font style={errorField.text} title={errors?.password} />
      ) : null}

      <Input
        label={'Confirm password'}
        value={confirmPassword}
        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
        icon={handleConfPassIcons}
        disabledIcon={!confirmPassword && true}
        onPressIcon={handleHidePassword}
        secureTextEntry={isHidePassword}
      />
      {errors?.confirmPassword ? (
        <Font style={errorField.text} title={errors?.confirmPassword} />
      ) : null}

      <View style={{paddingTop: 20}}>
        <FormButton mode="contained" onPress={onSubmit} title={'submit'} />
      </View>

      <Divider title={'or sign up with'} />
      <SocialButton
        onPress={() => console.log('facebook')}
        title={'Facebook'}
        textColor={'#e6e6e6'}
        buttonColor={'#4267B2'}
      />
      <SocialButton
        onPress={() => console.log('google')}
        title={'oogle'}
        textColor={colors.inputText}
        buttonColor={colors.input}
        icon={'google'}
      />
    </>
  );
};

export default SignUp;
