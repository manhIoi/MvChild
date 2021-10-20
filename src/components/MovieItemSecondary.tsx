import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import rootColor from '../constants/colors';
import rootFont from '../constants/fonts';
import {AnimeType} from '../types';
import Ripple from 'react-native-material-ripple';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/core';

interface MovieItemSecondaryPropsType {
  movie: AnimeType;
  width?: number | string;
}

const MovieItemSecondary = ({movie, width}: MovieItemSecondaryPropsType) => {
  const navigation = useNavigation<BottomTabNavigationProp<any>>();

  const handlePress = () => {
    navigation.navigate('MovieDetailStack', {
      screen: 'MovieDetailScreen',
      params: {movie},
    });
  };
  return (
    <View style={[styles.container, {width}]}>
      <Image
        style={[styles.imgMovie]}
        source={{
          uri: movie.thumbnail,
        }}
      />
      <View style={styles.overlay} />
      <Ripple
        onPress={handlePress}
        rippleOpacity={0.5}
        rippleDuration={2000}
        rippleColor={rootColor.primary}
        style={styles.containerDetail}>
        <Text style={styles.movieName}>{movie.name}</Text>
      </Ripple>
    </View>
  );
};

export default MovieItemSecondary;

const innerSpace = 8;
const styles = StyleSheet.create({
  container: {
    aspectRatio: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    padding: innerSpace,
  },
  imgMovie: {
    position: 'absolute',
    top: innerSpace,
    left: innerSpace,
    right: innerSpace,
    bottom: innerSpace,
    borderRadius: 4,
  },
  containerDetail: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  movieName: {
    fontFamily: rootFont.extraBold,
    color: rootColor.white,
    fontSize: 18,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 1,
  },
});
