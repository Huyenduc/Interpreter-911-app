import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%',
  },
  title: {
    fontSize: 24,
    color: '#DC0000',
    fontWeight: '600',
  },
  imgLogo: {
    width: '50%',
    resizeMode: 'contain',
  },
  headerInner: {
    width: '100%',
    minHeight: '35%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerInner: {
    width: '100%',
  },
  formView: {
    width: '100%',
  },
  footerInner: {
    fontSize: 20,
    paddingTop: 20,
    height: '20%',
  },
  inputLabel: {
    fontSize: 20,
  },
  textSignIn: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 2,
  },
  buttonContainer: {
    marginLeft: 'auto',
  },
  createLabel: {
    fontSize: 17,
  },
  createButton: {
    backgroundColor: '#2ba750',
    width: 120,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonStyle: {
    backgroundColor: '#f194ff',
  },
  buttonLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  loginButton: {
    fontSize: 20,
  },
  loginButtonSection: {
    width: '100%',
  },
  centerLink: {
    display: 'flex',
    alignItems: 'flex-end',
    width: '100%',
  },
  InputCont: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingLeft: 10,
  },
  textBold: {
    fontSize: 16,
    textDecoration: 'none',
    color: '#FF4040',
    fontWeight: '500',
  },
});

export default styles;
