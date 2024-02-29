import {Button} from 'react-native-paper';
import {FormButtonProps} from '../../../types/interfaces/components/interfaces';
import {formButton} from '../../../assets/theme/styles';
import useDarkMode from '../../../hooks/useDarkMode';

const FormButton = ({icon, mode, onPress, title}: FormButtonProps) => {
  const {colors} = useDarkMode();
  return (
    <Button
      style={[formButton.container, {backgroundColor: colors.formButton}]}
      icon={icon}
      mode={mode}
      onPress={onPress}
      contentStyle={{
        padding: 3,
      }}
      textColor={colors.formBtnText}
      uppercase>
      {title}
    </Button>
  );
};

export default FormButton;
