import { StyleSheet } from 'react-native';
import defaultTheme from '@theme/theme';

const styles = StyleSheet.create({
  defaultInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 60,
    height: 60,

    borderRadius: 60,

    backgroundColor: defaultTheme.backgroundColor.main,
  },
  defaultOuter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: 72,
    height: 72,

    borderRadius: 72,
    borderWidth: 3,
    borderColor: defaultTheme.backgroundColor.main,

    backgroundColor: 'transparent',
  },
  minatureInner: {
    width: 50,
    height: 50,

    borderRadius: 50,

    backgroundColor: defaultTheme.backgroundColor.main,
  },
  minatureOuter: {
    width: 60,
    height: 60,

    borderRadius: 60,
    borderWidth: 2,
    borderColor: defaultTheme.backgroundColor.main,

    backgroundColor: 'transparent',
  },
  darkOuter: {
    borderColor: defaultTheme.backgroundColor.main,
  },
  darkInner: {
    backgroundColor: defaultTheme.backgroundColor.main,
  },
});

export default styles;
