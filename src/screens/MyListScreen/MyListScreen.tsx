import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import MovieItemSecondary from '../../components/MovieItemSecondary';
import MyHeader from '../../components/MyHeader';
import rootColor from '../../constants/colors';
import dimensions from '../../constants/dimensions';
import {RootState} from '../../redux/reducers';
import {AnimeType} from '../../types';
import styles from './styles';

const MyListScreen = () => {
  const myFavorite = useSelector((state: RootState) => state.myFavorite);
  return (
    <>
      <MyHeader title="Danh sách của bạn" containerColor={rootColor.black} />
      <ScrollView style={styles.screen}>
        <View style={styles.listMovie}>
          {myFavorite.map((movie: AnimeType) => (
            <MovieItemSecondary
              key={`myList-item-${movie.slug}`}
              width={dimensions.width / 2}
              movie={movie}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default MyListScreen;
