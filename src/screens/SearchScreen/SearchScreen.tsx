import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import BackButton from '../../components/BackButton';
import MyHeader from '../../components/MyHeader';
import MyInput from '../../components/MyInput';
import SearchResult from '../../components/SearchResult';
import {Feather} from '../../constants/icon';
import styles from './styles';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <>
      <MyHeader
        leftAction={<BackButton />}
        title={
          <MyInput
            styleContainer={{
              flex: 1,
              marginHorizontal: 10,
            }}
            placeholder="Tìm kiếm hoạt hình"
            value={searchText}
            setValue={setSearchText}
            leftAction={<Feather name="search" color="#fff" size={22} />}
          />
        }
      />
      <View style={styles.screen}>
        <FlatList
          ListHeaderComponentStyle={styles.resultTextContainer}
          ListHeaderComponent={
            <Text style={styles.resultText}>
              Kết quả tìm kiếm: {searchText}
            </Text>
          }
          style={styles.listResult}
          data={mockData}
          renderItem={({item, index}) => <SearchResult movie={item} />}
          keyExtractor={item => `search-result-${item.id}`}
        />
      </View>
    </>
  );
};

const mockData = [
  {
    id: 456,
    name: 'Grave of the Fireflies',
    slug: 'grave-of-the-fireflies',
    thumbnail:
      'https://s199.imacdn.com/vg/2015/05/mo-dom-dom-large-1432284976.jpg',
    views: 123225,
    is_movie: true,
    time: '88 phút',
  },
  {
    id: 656,
    name: 'Vua Hải Tặc',
    slug: 'vua-hai-tac',
    thumbnail:
      'https://s199.imacdn.com/vg/2021/01/17/60decb2fb48c1e96_960b6e70c8db4d7a_21715916108641649118684.jpg',
    views: 161797567,
    is_movie: false,
    time: '994/6969 tập',
  },
  {
    id: 784,
    name: 'Thám Tử Lừng Danh Conan',
    slug: 'tham-tu-lung-danh-conan',
    thumbnail:
      'https://s199.imacdn.com/vg/2019/07/25/c636e3cedd8fbcf8_e459a52c64b55766_5079715640374052185710.jpg',
    views: 16871192,
    is_movie: false,
    time: '1018/??? tập',
  },
  {
    id: 882,
    name: 'Death Note',
    slug: 'death-note',
    thumbnail:
      'https://s199.imacdn.com/vg/2015/05/death-note-large-1432284976.jpg',
    views: 1939789,
    is_movie: false,
    time: '37/37 tập',
  },
  {
    id: 1822,
    name: 'Dragon Ball Z',
    slug: 'dragon-ball-z',
    thumbnail:
      'https://s199.imacdn.com/vg/2015/05/dragon-ball-z-large-1432284979.jpg',
    views: 3533841,
    is_movie: false,
    time: '291/291 tập',
  },
  {
    id: 1827,
    name: 'Dragon Ball Kai',
    slug: 'dragon-ball-kai',
    thumbnail:
      'https://s199.imacdn.com/vg/2015/05/dragon-ball-kai-large-1432284979.jpg',
    views: 1513004,
    is_movie: false,
    time: '98/98 tập',
  },
  {
    id: 1834,
    name: 'Một Nửa Ranma',
    slug: 'mot-nua-ranma',
    thumbnail:
      'https://s199.imacdn.com/vg/2015/05/mot-nua-ranma-large-1432284979.jpg',
    views: 593323,
    is_movie: false,
    time: '161/?? tập',
  },
  {
    id: 1844,
    name: 'Gundam Seed',
    slug: 'gundam-seed',
    thumbnail:
      'https://s199.imacdn.com/vg/2015/05/gundam-seed-large-1432284979.jpg',
    views: 144789,
    is_movie: false,
    time: '50/50 tập',
  },
  {
    id: 1850,
    name: 'Gundam 00',
    slug: 'gundam-00',
    thumbnail:
      'https://s199.imacdn.com/vg/2015/05/gundam-00-large-1432284980.jpg',
    views: 148050,
    is_movie: false,
    time: '25/25 tập',
  },
  {
    id: 1887,
    name: 'Infinite Stratos',
    slug: 'infinite-stratos',
    thumbnail:
      'https://s199.imacdn.com/vg/2015/05/infinite-stratos-large-1432284980.jpg',
    views: 798669,
    is_movie: false,
    time: '12/12 tập',
  },
  {
    id: 1941,
    name: 'Naruto Dattebayo',
    slug: 'naruto-dattebayo',
    thumbnail:
      'https://s199.imacdn.com/vg/2015/05/naruto-dattebayo-large-1432284981.jpg',
    views: 12343642,
    is_movie: false,
    time: '220/220 tập',
  },
];

export default SearchScreen;
