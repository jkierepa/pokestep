import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  filled: { ...StyleSheet.absoluteFillObject },
  container: {
    position: 'absolute',
    bottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '90%',

    marginTop: 15,
  },
  progressBar: {
    width: '100%',
    height: 15,

    borderColor: '#FFFFFF',
    borderWidth: 3,
    borderRadius: 5,

    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export default styles;
