import {StyleSheet} from 'react-native';
import {statusBarHeight} from '../../constants/dimensions';

const styles = StyleSheet.create({
  screen: {},
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  mediaControl: {},
  toolbarStyle: {
    backgroundColor: 'red',
  },
  nextEpisodeBtn: {
    position: 'absolute',
    zIndex: 100,
    top: statusBarHeight + 25,
    right: 25,
  },
});

export default styles;
