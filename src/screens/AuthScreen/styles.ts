import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import {statusBarHeight} from '../../constants/dimensions';
import rootFont from '../../constants/fonts';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: rootColor.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: rootColor.white,
    fontFamily: rootFont.bold,
    fontSize: 30,
    marginBottom: 10,
  },
  form: {
    width: '70%',
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    width: '100%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    backgroundColor: rootColor.primary,
    borderRadius: 0,
    marginTop: 20,
  },
  linkBtn: {
    backgroundColor: 'transparent',
  },
  titleaAtionBtn: {
    color: rootColor.white,
    fontSize: 16,
  },
  titleLinkBtn: {
    color: rootColor.white,
    fontSize: 14,
  },
  slice: {
    height: 1,
    backgroundColor: rootColor.gray,
    // width: '50%',
    width: '100%',
    alignSelf: 'center',
  },
});

export default styles;
