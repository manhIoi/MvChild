import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import rootApi from '../../api/rootApi';
import Avatar from '../../components/Avatar';
import ListMovieHorizotal from '../../components/ListMovieHorizotal';
import Loadding from '../../components/Loadding';
import SearchBtn from '../../components/SearchBtn';
import Slides from '../../components/Slides';
import {headerDimensions} from '../../constants/dimensions';
import sections from '../../constants/sections';
import {getMyFavorite} from '../../redux/actions/myFavoriteActions';
import {RootState} from '../../redux/reducers';
import {SectionType, SlideType} from '../../types';
import shuffle from '../../utils/shuffleArr';
import styles from './styles';

const HomeScreen = () => {
  // state
  const [slides, setSlides] = useState<SlideType[]>([]);
  const [dataSections, setDataSections] = useState<SectionType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const ContainerHeader = Animated.createAnimatedComponent(LinearGradient);
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  // animated
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, headerDimensions.fullHeight);
  const translateY = diffClamp.interpolate({
    inputRange: [0, headerDimensions.fullHeight],
    outputRange: [0, -headerDimensions.fullHeight],
  });
  const opacity = diffClamp.interpolate({
    inputRange: [0, headerDimensions.fullHeight / 3],
    outputRange: [1, 0],
  });

  const fetchData = async () => {
    let moviesWatchedString: any;
    if (user) {
      moviesWatchedString = await AsyncStorage.getItem(user.uid);
    }
    const SLIDES_DATA = await rootApi.getSlides();
    setSlides(SLIDES_DATA || []);

    if (user) {
      const res: any = await rootApi.getMyFavorite(user.uid);
      dispatch(getMyFavorite(res));
    }

    const DATA_SECTIONS = await sections.map(async section => {
      return await rootApi.getSection(section.category, section.slug);
    });

    await Promise.all(DATA_SECTIONS).then(value => {
      let tmp = value.map((data, index) => {
        return {
          ...sections[index],
          data,
        };
      });
      if (user && moviesWatchedString) {
        tmp = [
          {
            title: 'Truy cập gần đây',
            category: '',
            data: JSON.parse(moviesWatchedString),
          },
          ...tmp,
        ];
      }
      setDataSections(tmp);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ContainerHeader
        colors={['#111', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0)']}
        style={[
          styles.headerContainer,
          {
            opacity,
            transform: [{translateY}],
          },
        ]}>
        <LeftHeader />
        <RightHeader />
      </ContainerHeader>
      {isLoading && <Loadding />}
      <ScrollView
        style={styles.screen}
        onScroll={e => {
          scrollY.setValue(Math.abs(e.nativeEvent.contentOffset.y));
        }}>
        <View style={styles.container}>
          {/* slide */}
          <Slides slides={slides} />

          {/* list container list horizontal */}
          <View style={{paddingHorizontal: 10}}>
            {dataSections.map((section, index) => (
              <ListMovieHorizotal
                key={`dataSection-key-${section.title}-${index}`}
                title={section.title}
                movies={
                  section.isShuffle ? shuffle(section.data) : section.data
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const LeftHeader = () => {
  return (
    <TouchableOpacity
      style={{
        height: '100%',
        aspectRatio: 1,
        padding: 10,
        overflow: 'hidden',
      }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 100,
          backgroundColor: '#111',
        }}
        source={require('../../assets/images/mock3Logo.png')}
      />
    </TouchableOpacity>
  );
};

const RightHeader = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SearchBtn />
      {user && (
        <Avatar
          callback={() => navigation.navigate('AccountStack')}
          name={user.displayName}
          image={user.photoURL}
          size={40}
          rounded
        />
      )}
    </View>
  );
};

export default HomeScreen;
