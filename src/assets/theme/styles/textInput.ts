import {StyleSheet} from 'react-native';
import {breakpoints, width} from '../breakpoints';
import {colorHolder} from '../colors/colorHolder';

export const inputView = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
});

export const iconView = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
  },
});

export const input = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    fontSize: 14,
    paddingBottom: 5,
  },
});

export const formButton = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
});

export const responsiveField = StyleSheet.create({
  container: {
    width: width >= breakpoints.md ? '50%' : '100%',
  },
});

export const errorField = StyleSheet.create({
  text: {
    color: colorHolder.errorField.primary,
    paddingLeft: 10,
  },
});

export const cursor = StyleSheet.create({
  color: {
    color: '#4982BB',
  },
});
