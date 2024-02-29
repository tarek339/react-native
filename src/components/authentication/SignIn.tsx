import React, {useState} from 'react';
import axios from 'axios';
import {View} from 'react-native';
import {errorField, header} from '../../assets/theme/styles';
import {Button} from 'react-native-paper';
import useDarkMode from '../../hooks/useDarkMode';
import {useNavigation} from '@react-navigation/native';
import {Navigate} from '../../types/types';
import {
  Font,
  FormButton,
  HeaderText,
  Input,
  SocialButton,
  Divider,
} from '../parents';
import useFormActions from '../../hooks/useFormActions';
import useSelectors from '../../hooks/useSelector';

const SignIn = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleHidePassword,
    handlePassIcons,
  } = useFormActions();
  const navigation: Navigate = useNavigation();
  const {isHidePassword} = useSelectors();
  const {colors} = useDarkMode();

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async () => {
    try {
      const res = await axios.post('/users/sign-in', {
        email,
        password,
      });
      const data = res.data;
      const dataErrors = res?.data.errors;
      setMessage(data?.message);
      setEmailMessage(dataErrors ? dataErrors.emailMessage : '');
      setPasswordMessage(dataErrors ? dataErrors.passwordMessage : '');
      if (data.auth) {
        navigation.navigate('Home');
      }
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={header.container}>
        <HeaderText title={'Sign in'} />
      </View>
      <Input
        label={'E-Mail'}
        value={email}
        onChangeText={email => {
          setMessage('');
          setEmailMessage('');
          setEmail(email);
        }}
        icon={!email ? '' : 'close-box-outline'}
        disabledIcon={!email && true}
        onPressIcon={() => {
          setMessage('');
          setEmail('');
        }}
      />
      {emailMessage ? (
        <Font style={errorField.text} title={emailMessage} />
      ) : null}
      {message ? <Font style={errorField.text} title={message} /> : null}

      <Input
        label={'Password'}
        value={password}
        onChangeText={password => {
          setMessage('');
          setPasswordMessage('');
          setPassword(password);
        }}
        icon={handlePassIcons}
        disabledIcon={!password && true}
        onPressIcon={handleHidePassword}
        secureTextEntry={isHidePassword}
      />
      {passwordMessage ? (
        <Font style={errorField.text} title={passwordMessage} />
      ) : null}
      {message ? <Font style={errorField.text} title={message} /> : null}

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <Button
          onPress={() => navigation.navigate('CheckEmail')}
          mode="text"
          rippleColor="transparent">
          <Font style={{color: colors.inputText}} title={'Forgot password?'} />
        </Button>
      </View>
      <View style={{paddingTop: 5}}>
        <FormButton mode="contained" onPress={onSubmit} title={'submit'} />
      </View>

      <Divider title={'or sign in with'} />
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

export default SignIn;
