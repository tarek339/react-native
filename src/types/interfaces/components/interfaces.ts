import {ReactNode} from 'react';
import {GestureResponderEvent, TextStyle} from 'react-native';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

export interface FontProps {
  title: ReactNode;
  style?: TextStyle;
}

export interface InputProps {
  label: string;
  value: string;
  onChangeText: (((text: string) => void) & Function) | undefined;
  icon: IconSource;
  disabledIcon: boolean;
  onPressIcon:
    | (((event: GestureResponderEvent) => void) &
        ((e: GestureResponderEvent) => void) &
        ((e: GestureResponderEvent) => void))
    | undefined;
  secureTextEntry?: boolean;
}

type Mode =
  | 'text'
  | 'outlined'
  | 'contained'
  | 'elevated'
  | 'contained-tonal'
  | undefined;

export interface FormButtonProps {
  icon?: IconSource;
  mode?: Mode;
  onPress: ((e: GestureResponderEvent) => void) | undefined;
  title: string;
}

export interface SocialButtonProps {
  icon?: IconSource;
  mode?: Mode;
  onPress: ((e: GestureResponderEvent) => void) | undefined;
  title: JSX.Element | string;
  textColor: string;
  buttonColor: string;
}

export interface MenuButtonProps {
  onPress: ((e: GestureResponderEvent) => void) | undefined;
  buttonColor: string;
  title: string;
}

export interface HeaderMenuProps {
  scrollLeft: ((e: GestureResponderEvent) => void) | undefined;
  scrollRight: ((e: GestureResponderEvent) => void) | undefined;
  firstBtnColor: string;
  secondBtnColor: string;
}

export interface Errors {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
