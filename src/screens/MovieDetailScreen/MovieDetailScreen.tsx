import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, FlatList, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import rootApi from '../../api/rootApi';
import BackButton from '../../components/BackButton';
import ContainerWithTitle from '../../components/ContainerWithTitle';
import EpisodeItem from '../../components/EpisodeItem';
import MyHeader from '../../components/MyHeader';
import PrimaryButton from '../../components/PrimaryButton';
import SearchBtn from '../../components/SearchBtn';
import ViewsText from '../../components/ViewsText';
import Genres from '../../components/Genres';
import {AnimeInfoType} from '../../types';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {addToMyFavoriteAction} from '../../redux/actions/myFavoriteActions';

const MovieDetailScreen = () => {
  const route = useRoute();
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [movieDetail, setMovieDetail] = useState<AnimeInfoType>();
  const dispatch = useDispatch();
  const {movie} = route.params;

  const fecthData = async () => {
    const data = await rootApi.getInfoMoive(movie.slug);
    setMovieDetail(data);
  };

  const handleAddToMyFavorite = async () => {
    const res = await rootApi.addToMyFavorite(user.uid, movie);
    if (res) {
      dispatch(addToMyFavoriteAction(movie));
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  const moveWatchScreen = (episodeNumber: number) => {
    navigation.push('WatchMovieScreen', {
      id: movieDetail?.id,
      episodeNumber,
    });
  };

  return (
    <>
      <MyHeader
        leftAction={<BackButton />}
        rightAction={<SearchBtn />}
        containerColor="transparent"
      />
      <ScrollView style={styles.screen}>
        <View style={styles.description}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: movieDetail?.thumbnail,
              }}
            />
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={['transparent', '#111']}
              style={styles.overlayBottom}
            />
          </View>
          <View style={styles.descriptionInfo}>
            <Text style={styles.name}>{movieDetail?.name}</Text>
            <Genres genres={movieDetail?.genres} />
            <ViewsText views={movieDetail?.views} />
            <View style={styles.actions}>
              <PrimaryButton
                title="Yêu thích"
                callback={handleAddToMyFavorite}
                style={{...styles.btnAction, marginRight: 8}}
                styleTitle={styles.btnActionTitle}
              />
              <PrimaryButton
                title="Xem ngay"
                callback={() => moveWatchScreen(0)}
                style={styles.btnAction}
                styleTitle={styles.btnActionTitle}
              />
            </View>
          </View>
        </View>
        <View style={styles.episodesContainer}>
          <ContainerWithTitle title="Nội dung phim">
            <Text style={styles.textDescriptionMovie}>
              {movieDetail?.description}
            </Text>
          </ContainerWithTitle>
          <ContainerWithTitle title="Tập phim">
            <>
              {movieDetail?.episodes.map((episode, index) => (
                <Pressable
                  key={`episode-item-${episode.id}`}
                  onPress={() => moveWatchScreen(episode.name - 1)}>
                  <EpisodeItem episode={episode} />
                </Pressable>
              ))}
            </>
          </ContainerWithTitle>
        </View>
      </ScrollView>
    </>
  );
};

export default MovieDetailScreen;
