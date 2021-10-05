import {StyleSheet} from 'react-native';
import rootColor from '../../constants/colors';
import dimensions, {headerDimensions} from '../../constants/dimensions';
import rootFont from '../../constants/fonts';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: rootColor.black,
  },
  description: {},
  image: {
    height: dimensions.height * 0.6,
    width: dimensions.width,
  },
  overlayBottom: {
    width: '100%',
    height: 200,
    position: 'absolute',
    bottom: 0,
  },
  descriptionInfo: {
    marginTop: -50,
    alignItems: 'center',
  },
  name: {
    color: rootColor.white,
    fontFamily: rootFont.extraBold,
    fontSize: 30,
    height: 50,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
  },
  actions: {
    flexDirection: 'row',
  },
  btnAction: {
    backgroundColor: rootColor.primary,
    paddingVertical: 12,
  },
  btnActionTitle: {
    color: rootColor.white,
    fontFamily: rootFont.semiBold,
    textTransform: 'uppercase',
    fontSize: 16,
  },
  episodesContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  textDescriptionMovie: {
    color: rootColor.white,
    fontFamily: rootFont.regular,
  },
});

export default styles;
