import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  banner: {
    backgroundColor: '#F0f0f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    height: 70,
  },
  languageContainer: {},
  image: {
    width: '25%',
    height: 50,
  },
  title: {
    padding: 10,
    fontSize: 28,
    fontWeight: '500',
    color: '#FF5050',
  },
});
