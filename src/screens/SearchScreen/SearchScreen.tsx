import React, {useEffect, useRef, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import rootApi from '../../api/rootApi';
import BackButton from '../../components/BackButton';
import Loadding from '../../components/Loadding';
import MyHeader from '../../components/MyHeader';
import MyInput from '../../components/MyInput';
import SearchResult from '../../components/SearchResult';
import {Feather} from '../../constants/icon';
import {SearchResultType} from '../../types';
import styles from './styles';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [isLoadding, setIsLoading] = useState(true);
  const [movieResult, setMovieResult] = useState<SearchResultType[]>([]);
  let typingTimeoutRef = useRef<any>(null);

  const handleSearch = async () => {
    const data = await rootApi.getSearchResult(searchText, 15, 1);
    setMovieResult(data);
    setIsLoading(false);
  };
  const handleTextChange = (text: string) => {
    setSearchText(text);
    setIsLoading(true);
    // Debounce
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      handleSearch();
    }, 1000);
  };

  useEffect(() => {
    handleSearch();
  }, []);
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
            setValue={handleTextChange}
            leftAction={<Feather name="search" color="#fff" size={22} />}
          />
        }
      />
      <View style={styles.screen}>
        {isLoadding && <Loadding />}
        <FlatList
          ListHeaderComponentStyle={styles.resultTextContainer}
          ListHeaderComponent={
            <Text style={styles.resultText}>
              Kết quả tìm kiếm: {searchText}
            </Text>
          }
          style={styles.listResult}
          data={movieResult}
          renderItem={({item, index}) => <SearchResult movie={item} />}
          keyExtractor={item => `search-result-${item.id}`}
        />
      </View>
    </>
  );
};

export default SearchScreen;
