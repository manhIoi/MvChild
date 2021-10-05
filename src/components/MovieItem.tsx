import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import rootColor, {alphaColor} from '../constants/colors';
import dimensions from '../constants/dimensions';
import rootFont from '../constants/fonts';
import {AnimeType} from '../types';

interface MovieItemPropsType {
  movie: AnimeType;
}

const MovieItem = ({movie}: MovieItemPropsType) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const moveToDetailScreen = () => {
    navigation.navigate('MovieDetailStack', {
      screen: 'MovieDetailScreen',
      params: {movie},
    });
  };
  return (
    <TouchableScale
      style={styles.container}
      activeScale={0.95}
      onPress={moveToDetailScreen}>
      <Image
        style={styles.imgMovie}
        source={{
          uri: movie.thumbnail,
        }}
      />
      <View style={styles.containerDetail}>
        <Text style={styles.movieName}>{movie.name}</Text>
      </View>
    </TouchableScale>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    width: dimensions.width / 2.5,
    aspectRatio: 0.7,
    borderRadius: 6,
    overflow: 'hidden',
    marginRight: 10,
  },

  imgMovie: {
    flex: 1,
  },
  containerDetail: {
    position: 'absolute',
    padding: 6,
    bottom: 6,
    left: 6,
    right: 6,
    backgroundColor: alphaColor(rootColor.primary, 0.8),
  },
  movieName: {
    fontFamily: rootFont.medium,
    color: rootColor.white,
  },
});
