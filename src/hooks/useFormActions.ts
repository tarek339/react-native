import {useState} from 'react';
import useSelectors from './useSelector';
import useDispatches from './useDispatches';

const useFormActions = () => {
  const {isHidePassword} = useSelectors();
  const {hidePassword, showPassword, dispatchErrors, formValid, formNotValid} =
    useDispatches();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const reset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleHidePassword = () => {
    isHidePassword ? showPassword() : hidePassword();

    !isHidePassword && password && setPassword('');
    !isHidePassword && password && hidePassword();

    !isHidePassword && confirmPassword && setConfirmPassword('');
    !isHidePassword && confirmPassword && hidePassword();
  };

  const handlePassIcons = !password
    ? ''
    : password && isHidePassword
    ? 'eye-settings-outline'
    : password && !isHidePassword
    ? 'close-box-outline'
    : '';
  const handleConfPassIcons = !confirmPassword
    ? ''
    : confirmPassword && isHidePassword
    ? 'eye-settings-outline'
    : confirmPassword && !isHidePassword
    ? 'close-box-outline'
    : '';

  const validateForm = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const err = {
      firstName: !firstName ? 'Field is required' : '',
      lastName: !lastName ? 'Field is required' : '',
      email: !email
        ? 'Field is required'
        : !email.match(validRegex)
        ? 'Invalid type of email'
        : '',
      password: !password ? 'Field is required' : '',
      confirmPassword: !confirmPassword
        ? 'Field is required'
        : confirmPassword !== password
        ? 'Passwords must match'
        : '',
    };
    dispatchErrors(err);
    if (Object.values(err).every(value => value === '')) {
      formValid();
    } else formNotValid();
  };

  return {
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
    handleHidePassword,
    reset,
    handlePassIcons,
    handleConfPassIcons,
    validateForm,
  };
};

export default useFormActions;
