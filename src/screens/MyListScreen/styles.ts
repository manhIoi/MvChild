import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import {headerDimensions} from '../../constants/dimensions';

const styles = StyleSheet.create({
  screen: {
    marginTop: headerDimensions.fullHeight,
    backgroundColor: rootColor.black,
  },
  screenCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: rootColor.black,
    marginTop: headerDimensions.fullHeight,
    flex: 1,
  },
  listMovie: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default styles;
