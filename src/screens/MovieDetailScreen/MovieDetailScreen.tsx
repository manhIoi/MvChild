import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  Pressable,
  AsyncStorage,
} from 'react-native';
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
import {AnimeInfoType, AnimeType} from '../../types';
import styles from './styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reducers';
import {
  addToMyFavoriteAction,
  removeToMyFavoriteAction,
} from '../../redux/actions/myFavoriteActions';
import Loadding from '../../components/Loadding';

const MovieDetailScreen = () => {
  const route = useRoute();
  const user = useSelector((state: RootState) => state.user);
  const myFavorite = useSelector((state: RootState) => state.myFavorite);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
  const [movieDetail, setMovieDetail] = useState<AnimeInfoType>();
  const [isLoading, setIsLoading] = useState(true);

  const {movie} = route.params;

  const isMovieInMyFavorite = () => {
    const index = myFavorite.findIndex(
      (item: AnimeType) => item.slug === movie.slug,
    );
    if (index != -1) return true;
    return false;
  };

  const fecthData = useCallback(async () => {
    const data = await rootApi.getInfoMoive(movie.slug);
    setMovieDetail(data);
    setIsLoading(false);
  }, []);

  const handleAddToMyFavorite = async () => {
    if (!user) {
      navigation.navigate('AuthStack');
      return;
    }
    if (!isFavorite) {
      const res = await rootApi.addToMyFavorite(user.uid, movie);
      if (res) {
        dispatch(addToMyFavoriteAction(movie));
      }
    } else {
      if (isMovieInMyFavorite()) {
        const res = await rootApi.removeFromMyFavorite(user.uid, movie);
        if (res) {
          dispatch(removeToMyFavoriteAction(movie));
        }
      }
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    fecthData();
    if (isMovieInMyFavorite()) {
      setIsFavorite(true);
    }
  }, []);

  const moveWatchScreen = async (episodeNumber: number) => {
    try {
      if (user) {
        // await AsyncStorage.clear();
        const existMovieWatchedString: any = await AsyncStorage.getItem(
          user.uid,
        );
        let existMovieWatchedArr = existMovieWatchedString
          ? JSON.parse(existMovieWatchedString)
          : [];

        const index = existMovieWatchedArr.findIndex(
          (item: any) => item.slug === movie.slug,
        );
        if (index > -1) {
          existMovieWatchedArr.splice(index, 1);
        }
        existMovieWatchedArr = [movie, ...existMovieWatchedArr];
        await AsyncStorage.setItem(
          user.uid,
          JSON.stringify(existMovieWatchedArr),
        );
      }
      navigation.push('WatchMovieScreen', {
        id: movieDetail?.id,
        episodeNumber,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MyHeader
        leftAction={<BackButton />}
        rightAction={<SearchBtn />}
        containerColor="transparent"
      />
      {isLoading ? (
        <Loadding />
      ) : (
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
                  title={`${isFavorite ? 'Hủy yêu thích' : 'Yêu thích'}`}
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
      )}
    </>
  );
};

export default MovieDetailScreen;
