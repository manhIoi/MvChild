import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import rootColor from '../constants/colors';
import rootFont from '../constants/fonts';
import {AnimeType} from '../types';
import MovieItem from './MovieItem';

interface ListMovieHorizotalPropsType {
  movies?: AnimeType[];
  title: string;
}

const ListMovieHorizotal = ({movies, title}: ListMovieHorizotalPropsType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        renderItem={({item, index}) => <MovieItem movie={item} />}
      />
    </View>
  );
};

export default ListMovieHorizotal;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: rootColor.black,
    marginBottom: 10,
  },
  title: {
    fontFamily: rootFont.bold,
    fontSize: 20,
    color: rootColor.white,
    marginBottom: 10,
  },
});
