import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ring: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    aspectRatio: 1 / 1,
    borderRadius: 120,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  whiteBorder: {
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 2 / 3,
    borderRadius: 10,
  },
  image: {
    resizeMode: 'contain',
    width: '80%',
    aspectRatio: 1 / 1,
  },
  topLeftCorner: {
    position: 'absolute',
    left: 5,
    top: 10,
  },
  font: {
    fontFamily: 'PressStart2P_400Regular',
  },
  largeText: {
    fontSize: 20,
  },
  mediumText: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 14,
  },
});

export default styles;
