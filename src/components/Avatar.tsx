import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-animatable';
import rootColor from '../constants/colors';
import rootFont from '../constants/fonts';

interface AvatarPropsType {
  image?: string;
  name: string;
  size: number;
  rounded?: boolean;
}

const Avatar = ({image, name, rounded, size}: AvatarPropsType) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderRadius: rounded ? size * 0.5 : size * 0.1,
          width: size,
          aspectRatio: 1,
        },
      ]}>
      {image ? (
        <Image style={StyleSheet.absoluteFillObject} source={{uri: image}} />
      ) : (
        <Text style={[styles.textDefault, {fontSize: size * 0.4}]}>
          {name[0]}
        </Text>
      )}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {},
  textDefault: {
    color: rootColor.white,
    fontFamily: rootFont.medium,
  },
});
