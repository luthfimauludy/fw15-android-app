import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  btn: {
    width: '100%',
    height: 45,
    backgroundColor: '#61764b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    color: '#373A42',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subTitle: {
    color: '#373A42',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 20,
    borderColor: '#C1C5D0',
    borderRadius: 15,
  },
  inputComponent: {
    flex: 1,
  },
  link: {
    color: '#61764b',
    fontWeight: 'bold',
  },
});

export default globalStyles;
