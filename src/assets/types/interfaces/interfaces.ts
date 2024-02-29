export interface IDimensions {
  fontScale: number;
  scale: number;
  width: number;
  height: number;
}

export interface Breakpoints {
  base: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export interface Colors {
  background: string;
  bgSecondary: string;
  text: string;
  input: string;
  inputFocused: string;
  inputText: string;
  selection: string;
  formButton: string;
  formBtnText: string;
  button: string;
  buttonFocused: string;
  buttonText: string;
}

export interface ColorHolder {
  background: {
    primary: string;
    dark: string;
  };
  bgSecondary: {
    primary: string;
    dark: string;
  };
  text: {
    primary: string;
    dark: string;
  };
  input: {
    primary: string;
    dark: string;
  };
  inputFocused: {
    primary: string;
    dark: string;
  };
  inputText: {
    primary: string;
    dark: string;
  };
  errorField: {
    primary: string;
    dark: string;
  };
  selection: {
    primary: string;
    dark: string;
  };
  formButton: {
    primary: string;
    dark: string;
  };
  formBtnText: {
    primary: string;
    dark: string;
  };
  button: {
    primary: string;
    dark: string;
  };
  buttonFocused: {
    primary: string;
    dark: string;
  };
  buttonText: {
    primary: string;
    dark: string;
  };
  socialButton: {
    primary: string;
    dark: string;
  };
}
