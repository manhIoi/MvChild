import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import rootColor from '../constants/colors';
import dimensions from '../constants/dimensions';
import rootFont from '../constants/fonts';
import {SearchResultType} from '../types';
import ViewsText from './ViewsText';

interface SearchResultPropsType {
  movie: SearchResultType;
}

const SearchResult = ({movie}: SearchResultPropsType) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('MovieDetailStack', {
          screen: 'MovieDetailScreen',
          params: {movie},
        })
      }>
      <Image
        style={styles.image}
        source={{
          uri: movie.thumbnail,
        }}
      />
      <View style={styles.description}>
        <Text style={styles.title}>{movie.name}</Text>
        <Text style={styles.subTitle}>
          {movie.is_movie ? 'Phim bộ' : 'Phim lẻ'}: {movie.time}
        </Text>
        <ViewsText views={movie.views} />
      </View>
    </TouchableOpacity>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    flexDirection: 'row',
  },
  image: {
    width: dimensions.width * 0.3,
    aspectRatio: 1.5,
  },
  description: {
    justifyContent: 'center',
    flex: 1,
    margin: 4,
  },
  title: {
    color: rootColor.white,
    fontFamily: rootFont.semiBold,
    fontSize: 18,
  },
  subTitle: {
    color: 'whitesmoke',
    fontFamily: rootFont.regular,
  },
});
