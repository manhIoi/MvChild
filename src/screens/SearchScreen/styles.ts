import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import {headerDimensions} from '../../constants/dimensions';
import rootFont from '../../constants/fonts';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: rootColor.black,
  },
  listResult: {
    marginTop: headerDimensions.fullHeight,
  },
  resultTextContainer: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  resultText: {
    color: rootColor.white,
    fontFamily: rootFont.bold,
    fontSize: 20,
  },
  mockText: {
    height: 50,
    color: 'white',
  },
});

export default styles;
