import {IconButton, TextInput} from 'react-native-paper';
import {Text, View} from 'react-native';
import {useState} from 'react';
import {InputProps} from '../../../types/interfaces/components/interfaces';
import {iconView, inputView, input, cursor} from '../../../assets/theme/styles';
import useDarkMode from '../../../hooks/useDarkMode';

const Input = ({
  label,
  value,
  onChangeText,
  icon,
  disabledIcon,
  onPressIcon,
  secureTextEntry,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const {colors} = useDarkMode();
  const Label = <Text style={{color: colors.inputText}}>{label}</Text>;
  const bgColor = isFocused ? colors.inputFocused : colors.input;

  return (
    <View style={inputView.container}>
      <View style={iconView.container}>
        <IconButton
          icon={icon}
          size={20}
          iconColor={colors.inputText}
          onPress={onPressIcon}
          disabled={disabledIcon}
          rippleColor="transparent"
        />
      </View>
      <TextInput
        label={Label}
        style={[input.container, {backgroundColor: bgColor}]}
        contentStyle={{color: colors.inputText}}
        dense
        cursorColor={cursor.color.color}
        activeOutlineColor="transparent"
        outlineColor="transparent"
        activeUnderlineColor="transparent"
        underlineColor="transparent"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        selectionColor="#4982BB"
      />
    </View>
  );
};

export default Input;
