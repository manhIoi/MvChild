import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import {headerDimensions} from '../../constants/dimensions';
import {rootFont} from '../../constants/fonts';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: rootColor.black,
    paddingHorizontal: 10,
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    flex: 1,
    aspectRatio: 0.8,
  },
  descriptionInfo: {
    flex: 2,
    paddingLeft: 10,
  },
  name: {
    color: rootColor.white,
    fontFamily: rootFont.bold,
    fontSize: 20,
  },
  genres: {
    color: 'lightgrey',
    fontFamily: rootFont.medium,
  },
  views: {
    color: 'gray',
    fontFamily: rootFont.medium,
  },
  actions: {
    flexDirection: 'row',
  },
  episodesContainer: {},
  textDescriptionMovie: {
    color: rootColor.white,
    fontFamily: rootFont.regular,
  },
});

export default styles;
