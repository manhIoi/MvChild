import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import rootColor from '../constants/colors';
import rootFont from '../constants/fonts';
import {GenreType} from '../types';

interface GenrePropsType {
  genres?: GenreType[];
}

const Genres = ({genres}: GenrePropsType) => {
  return (
    <View style={styles.genres}>
      {genres &&
        genres.map((genre, index) => (
          <Text key={`genre-${genre.slug}`} style={styles.genre}>
            {genre.name}
          </Text>
        ))}
    </View>
  );
};

export default Genres;

const styles = StyleSheet.create({
  genres: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  genre: {
    color: rootColor.white,
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: 'dimgrey',
    borderRadius: 4,
    margin: 4,
    fontFamily: rootFont.medium,
  },
});
