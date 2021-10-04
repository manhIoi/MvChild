import {useRoute} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import rootApi from '../../api/rootApi';
import BackButton from '../../components/BackButton';
import EpisodeItem from '../../components/EpisodeItem';
import Footer from '../../components/Footer';
import MyHeader from '../../components/MyHeader';
import PrimaryButton from '../../components/PrimaryButton';
import SearchBtn from '../../components/SearchBtn';
import {AnimeInfoType} from '../../types';
import styles from './styles';

const MovieDetailScreen = () => {
  const route = useRoute();
  const [movieDetail, setMovieDetail] = useState<AnimeInfoType>();
  const {params} = route;

  const fecthData = async () => {
    const data = await rootApi.getInfoMoive(params.movie.slug);
    setMovieDetail(data);
  };

  useEffect(() => {
    fecthData();
  }, []);

  return (
    <>
      <MyHeader
        leftAction={<BackButton />}
        rightAction={<SearchBtn />}
        containerColor="#111"
      />
      <ScrollView style={styles.screen}>
        <Footer />
        <View style={styles.description}>
          <Image
            style={styles.image}
            source={{
              uri: movieDetail?.thumbnail,
            }}
          />
          <View style={styles.descriptionInfo}>
            <Text style={styles.name}>{movieDetail?.name}</Text>
            <Text style={styles.genres}>
              Thể loại:{' '}
              {movieDetail?.genres.map((genre, index) => `${genre.name} ,`)}
            </Text>
            <Text style={styles.views}>Lượt xem: {movieDetail?.views}</Text>
            <View style={styles.actions}>
              <PrimaryButton
                title="<3"
                callback={() => console.log('add to favorite')}
                style={{marginRight: 10}}
              />
              <PrimaryButton
                title="Xem ngay"
                callback={() => console.log('Play')}
              />
            </View>
          </View>
        </View>
        <View style={styles.episodesContainer}>
          <ScrollView>
            <Text style={styles.textDescriptionMovie}>
              {movieDetail?.description}
            </Text>

            {movieDetail?.episodes.map((episode, index) => (
              <EpisodeItem
                key={`episode-item-${episode.id}`}
                episode={episode}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

const mockData = {
  genres: [
    {
      name: 'Hài Hước',
      url: '/anime/hai-huoc',
      slug: 'hai-huoc',
    },
    {
      name: 'Siêu Nhiên',
      url: '/anime/sieu-nhien',
      slug: 'sieu-nhien',
    },
    {
      name: 'Giả Tưởng',
      url: '/anime/gia-tuong',
      slug: 'gia-tuong',
    },
  ],
  subTeams: ['Sea Neko Team', 'Wicked House'],
  description:
    'Vào năm 1100 trước công nguyên tại Trung Quốc cổ đại , vào triều nhà Thương , lúc này Trụ vương lên nắm ngôi , chỉ đam mê tửu sắc , nghe lời Đắc Kỉ , khiến khắp nơi phẫn nộ , tại đỉnh núi Côn Lôn , nơi các đạo sĩ và tiên nhân tu luyện , câu truyện bắt đầu...\n\tĐây là một anime khá hay , nó hay không phải là ở bối cảnh lịch sử , hay cốt truyện Phong Thần nổi tiếng mà là ở sự hài hước , các bạn có thể tưởng tượng cách đây 3000 năm mà đã có giàn âm thanh lập thể , các tiên nhân trong Robot , Nguyên Thủy Thiên Tôn chỉ huy chiến hạm Côn Lôn đánh nhau với Thông Thiên Giáo Chủ vv...vv , lại nữa chúng ta khi nghĩ tới Khương Tử Nha là nghĩ tới ông già 72 tuổi nhưng ở đây lại là một thanh niên độ 18 , nói chung đây là một phim khá vui nhộn.\n                ',
  id: 2106,
  name: 'Soul Hunter',
  views: 363267,
  thumbnail:
    'https://s199.imacdn.com/vg/2017/02/08/6437011c02b65001_b09a821b8af177ca_2137614865467244.jpg',
  slug: 'soul-hunter',
  episodes: [
    {
      id: 55843,
      name: 1,
      special_name: 0,
      detail_name: null,
      full_name: 'Tập 1',
      film_name: 'Soul Hunter',
      slug: 'tap-1',
      link: '/soul-hunter/tap-1',
      views: 66205,
      is_copyrighted: null,
      has_preview: null,
      thumbnail_small:
        'https://s199.imacdn.com/vg/2015/05/soul-hunter-large-1432284987.jpg',
      thumbnail_medium:
        'https://s199.imacdn.com/vg/2017/02/08/6437011c02b65001_b09a821b8af177ca_2137614865467244.jpg',
      upcoming: null,
    },
    {
      id: 55844,
      name: 2,
      special_name: 0,
      detail_name: null,
      full_name: 'Tập 2',
      film_name: 'Soul Hunter',
      slug: 'tap-2',
      link: '/soul-hunter/tap-2',
      views: 14943,
      is_copyrighted: null,
      has_preview: null,
      thumbnail_small:
        'https://s199.imacdn.com/vg/2015/05/soul-hunter-large-1432284987.jpg',
      thumbnail_medium:
        'https://s199.imacdn.com/vg/2017/02/08/8ab8815f636137fe_996c0dde68ba474b_2561214865467268.jpg',
      upcoming: null,
    },
    {
      id: 55845,
      name: 3,
      special_name: 0,
      detail_name: null,
      full_name: 'Tập 3',
      film_name: 'Soul Hunter',
      slug: 'tap-3',
      link: '/soul-hunter/tap-3',
      views: 8838,
      is_copyrighted: null,
      has_preview: null,
      thumbnail_small:
        'https://s199.imacdn.com/vg/2015/05/soul-hunter-large-1432284987.jpg',
      thumbnail_medium:
        'https://s199.imacdn.com/vg/2017/02/08/09ee7c24160aa728_9510a0db0f7ddc5a_2114914865467336.jpg',
      upcoming: null,
    },
    {
      id: 55846,
      name: 4,
      special_name: 0,
      detail_name: null,
      full_name: 'Tập 4',
      film_name: 'Soul Hunter',
      slug: 'tap-4',
      link: '/soul-hunter/tap-4',
      views: 7086,
      is_copyrighted: null,
      has_preview: null,
      thumbnail_small:
        'https://s199.imacdn.com/vg/2015/05/soul-hunter-large-1432284987.jpg',
      thumbnail_medium:
        'https://s199.imacdn.com/vg/2017/02/08/6e452c85f3750678_49bc6271c2be4514_2620514865467468.jpg',
      upcoming: null,
    },
    {
      id: 55847,
      name: 5,
      special_name: 0,
      detail_name: null,
      full_name: 'Tập 5',
      film_name: 'Soul Hunter',
      slug: 'tap-5',
      link: '/soul-hunter/tap-5',
      views: 5309,
      is_copyrighted: null,
      has_preview: null,
      thumbnail_small:
        'https://s199.imacdn.com/vg/2015/05/soul-hunter-large-1432284987.jpg',
      thumbnail_medium:
        'https://s199.imacdn.com/vg/2017/02/08/2747f2c327972c2a_f62df6aadd77bf0f_1904714865457413.jpg',
      upcoming: null,
    },
  ],
};

export default MovieDetailScreen;
