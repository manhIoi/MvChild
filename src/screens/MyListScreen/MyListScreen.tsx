import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import rootApi from '../../api/rootApi';
import MovieItemSecondary from '../../components/MovieItemSecondary';
import MyHeader from '../../components/MyHeader';
import rootColor from '../../constants/colors';
import dimensions from '../../constants/dimensions';
import {getMyFavorite} from '../../redux/actions/myFavoriteActions';
import {RootState} from '../../redux/reducers';
import styles from './styles';

const MyListScreen = () => {
  const myFavorite = useSelector((state: RootState) => state.myFavorite);
  const idUser = useSelector((state: RootState) => state.user).uid;
  const dispatch = useDispatch();

  const fetchData = async () => {
    const res: any = await rootApi.getMyFavorite(idUser);
    console.log(res);
    dispatch(getMyFavorite(res));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MyHeader title="Danh sách của bạn" containerColor={rootColor.black} />
      <ScrollView style={styles.screen}>
        <View style={styles.listMovie}>
          {myFavorite.map(movie => (
            <MovieItemSecondary width={dimensions.width / 2} movie={movie} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default MyListScreen;
