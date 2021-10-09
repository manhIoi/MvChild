import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import {headerDimensions, statusBarHeight} from '../../constants/dimensions';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: rootColor.black,
  },
  container: {
    backgroundColor: rootColor.black,
    zIndex: 100,
  },
  headerContainer: {
    zIndex: 1000,
    position: 'absolute',
    paddingTop: statusBarHeight,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: headerDimensions.fullHeight,
    paddingHorizontal: 10,
  },
});

export default styles;
