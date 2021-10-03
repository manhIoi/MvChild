import React, {Ref} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SlideType} from '../types';
import LinearGradient from 'react-native-linear-gradient';

interface SlidePropsType {
  slide: SlideType;
  index: number;
}

const Slide = ({slide, index}: SlidePropsType) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, StyleSheet.absoluteFillObject]}
        source={{uri: slide.thumbnail}}
      />
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  image: {
    flex: 1,
  },
});
