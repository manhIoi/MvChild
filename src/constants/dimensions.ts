import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const dimensions = {
  width: Dimensions.get('screen').width,
  height: Dimensions.get('screen').height,
};

export default dimensions;

export const statusBarHeight = Math.ceil(getStatusBarHeight());

const HEADER_H = dimensions.height * 0.085;
export const headerDimensions = {
  heightContent: HEADER_H,
  fullHeight: HEADER_H + statusBarHeight,
};

export const bottomTabHeight = Math.ceil(dimensions.height * 0.075);
