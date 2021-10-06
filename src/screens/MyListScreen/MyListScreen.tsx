import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MovieItemSecondary from '../../components/MovieItemSecondary';
import MyHeader from '../../components/MyHeader';
import rootColor from '../../constants/colors';
import dimensions from '../../constants/dimensions';
import styles from './styles';

const MyListScreen = () => {
  return (
    <>
      <MyHeader title="Danh sách của bạn" containerColor={rootColor.black} />
      <ScrollView style={styles.screen}>
        {/* <View style={{flex: 1}}>
          <MovieItemSecondary movie={mockData[0]} />
        </View>

        <View style={{flex: 1}}>
          <MovieItemSecondary movie={mockData[0]} />
        </View> */}
        <View style={styles.listMovie}>
          <MovieItemSecondary
            width={dimensions.width / 2}
            movie={mockData[0]}
          />
          <MovieItemSecondary
            width={dimensions.width / 2}
            movie={mockData[1]}
          />
          <MovieItemSecondary
            width={dimensions.width / 2}
            movie={mockData[2]}
          />
          <MovieItemSecondary
            width={dimensions.width / 2}
            movie={mockData[3]}
          />
          <MovieItemSecondary
            width={dimensions.width / 2}
            movie={mockData[3]}
          />
          <MovieItemSecondary
            width={dimensions.width / 2}
            movie={mockData[3]}
          />
        </View>
      </ScrollView>
    </>
  );
};

const mockData = [
  {
    slug: 'boruto-naruto-next-generations',
    views: 54116477,
    name: 'Boruto: Naruto Next Generations',
    time: '218/999 tập',
    latestEpisode: {},
    thumbnail:
      'https://s199.imacdn.com/vg/2021/05/13/e3c93e9e3ae4c4d1_9a3a2fe806b4ffc6_3775516209096674118684.jpg',
  },
  {
    slug: 'naruto-shippuuden',
    views: 74426121,
    name: 'Naruto Shippuuden',
    time: '500/500 tập',
    latestEpisode: {},
    thumbnail:
      'https://s199.imacdn.com/vg/2016/07/01/7c868aa86063686d_d749742c8f567c0c_44135146734386613.jpg',
  },
  {
    slug: 'conan-the-movie',
    views: 7138644,
    name: 'Conan The Movie',
    time: '23/23 tập',
    latestEpisode: {},
    thumbnail:
      'https://s199.imacdn.com/vg/2019/07/26/6c040a27770ec024_ded1b5147578648e_5019215641124505185710.jpg',
  },
  {
    slug: 'vua-hai-tac',
    views: 161788193,
    name: 'Vua Hải Tặc',
    time: '994/6969 tập',
    latestEpisode: {},
    thumbnail:
      'https://s199.imacdn.com/vg/2021/01/17/60decb2fb48c1e96_960b6e70c8db4d7a_21715916108641649118684.jpg',
  },
  {
    slug: 'mushoku-tensei-isekai-ittara-honki-dasu',
    views: 2761010,
    name: 'Mushoku Tensei: Isekai Ittara Honki Dasu',
    time: '12/999 tập',
    latestEpisode: {},
    thumbnail:
      'https://s199.imacdn.com/vg/2021/01/11/0978bac0773975c2_47bc3668b8da3d6d_4835816103587783118684.jpg',
  },
  {
    slug: 'nanatsu-no-taizai-that-dai-toi',
    views: 18196313,
    name: 'Nanatsu no Taizai - Thất Đại Tội',
    time: '100/100 tập',
    latestEpisode: {},
    thumbnail:
      'https://s199.imacdn.com/vg/2021/03/04/bded8278df49b8c4_22bd7cbe04079e9c_4664416148275308118684.jpg',
  },
];

export default MyListScreen;
