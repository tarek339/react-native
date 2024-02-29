import React from 'react';
import {View} from 'react-native';
import Font from '../fonts/Font';
import useDarkMode from '../../../hooks/useDarkMode';

interface IDivider {
  title: string;
}
const Divider = ({title}: IDivider) => {
  const {colors} = useDarkMode();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.inputText,
          height: 1.5,
        }}></View>
      <View>
        <Font
          style={{
            fontSize: 12,
            textTransform: 'uppercase',
            color: colors.inputText,
          }}
          title={title}
        />
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.inputText,
          height: 1.5,
        }}></View>
    </View>
  );
};

export default Divider;
