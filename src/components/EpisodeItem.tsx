import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import rootColor from '../constants/colors';
import {rootFont} from '../constants/fonts';
import {EpisodeType} from '../types';

interface EpisodePropsType {
  episode: EpisodeType;
}

const EpisodeItem = ({episode}: EpisodePropsType) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: episode.thumbnail_medium}} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}> {episode.full_name}</Text>
        <Text style={styles.views}>Lượt xem: {episode.views}</Text>
      </View>
    </View>
  );
};

export default EpisodeItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'row',
  },
  image: {
    width: '40%',
    aspectRatio: 1.5,
    borderRadius: 4,
  },
  nameContainer: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  name: {
    color: rootColor.white,
    fontFamily: rootFont.bold,
    fontSize: 18,
  },
  views: {
    color: 'gray',
    fontFamily: rootFont.regular,
  },
});
