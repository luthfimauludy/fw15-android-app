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
  btnDisabled: {
    backgroundColor: '#AAA',
  },
  btnDisabledText: {
    color: '#888',
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
  textError: {
    color: '#FF0000',
    fontSize: 12,
    paddingLeft: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    paddingBottom: 50,
    gap: 30,
  },
  textHeader: {
    fontSize: 20,
    letterSpacing: 1,
  },
  boxEventDetail: {
    position: 'relative',
    height: 350,
    gap: 10,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  navContainerEventDetail: {
    paddingHorizontal: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
    zIndex: 1,
  },
  wrapperTitleText: {
    position: 'absolute',
    top: 0,
    left: 0,
    gap: 10,
    height: '100%',
    width: '100%',
    paddingLeft: 25,
    paddingTop: 140,
    backgroundColor: 'transparent',
  },
});

export default globalStyles;
