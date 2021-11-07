import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import {headerDimensions, statusBarHeight} from '../../constants/dimensions';
import rootFont from '../../constants/fonts';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: headerDimensions.heightContent,
    paddingHorizontal: 20,
    backgroundColor: rootColor.black,
  },
  screenCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    backgroundColor: rootColor.primary,
  },
  titleBtnLogin: {
    color: rootColor.white,
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailText: {
    fontFamily: rootFont.medium,
    fontSize: 16,
    color: 'silver',
  },
  displaynameText: {
    fontFamily: rootFont.bold,
    color: 'whitesmoke',
    fontSize: 18,
  },
  itemAction: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: rootColor.gray,
  },
  itemActionText: {
    color: 'silver',
    fontSize: 18,
    fontFamily: rootFont.medium,
    marginLeft: 12,
  },
});

export default styles;
