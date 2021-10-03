import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';

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
    top: 0,
    left: 0,
    right: 0,
  },
  mockBtn: {
    backgroundColor: 'tomato',
    padding: 10,
    margin: 10,
  },
});

export default styles;
