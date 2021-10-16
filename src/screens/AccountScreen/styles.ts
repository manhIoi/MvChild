import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import {headerDimensions} from '../../constants/dimensions';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: rootColor.black,
  },
  btnLogin: {
    backgroundColor: rootColor.primary,
  },
  titleBtnLogin: {
    color: rootColor.white,
    fontSize: 16,
  },
});

export default styles;
