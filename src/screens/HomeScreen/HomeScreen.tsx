import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
} from 'react-native';
import rootApi from '../../api/rootApi';
import Footer from '../../components/Footer';
import ListMovieHorizotal from '../../components/ListMovieHorizotal';
import MovieItem from '../../components/MovieItem';
import MyHeader from '../../components/MyHeader';
import Slides from '../../components/Slides';
import {headerDimensions} from '../../constants/dimensions';
import {Feather} from '../../constants/icon';
import {SectionType, SlideType} from '../../types';
import styles from './styles';

const sections = [
  {
    title: 'Mới cập nhật',
    category: 'recently',
  },
  {
    title: 'Hôm nay xem gì?',
    category: 'recommended',
  },
  {
    title: 'Tìm kiếm nhiều nhất trong tháng',
    category: 'ranking',
    slug: 'thang',
  },
  {
    title: 'Phổ biến nhất',
    category: 'ranking',
    slug: 'nam',
  },
];

const HomeScreen = () => {
  // state
  const [slides, setSlides] = useState<SlideType[]>([]);
  const [dataSections, setDataSections] = useState<SectionType[]>([]);

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
    const SLIDES_DATA = await rootApi.getSlides();
    setSlides(SLIDES_DATA);

    const DATA_SECTIONS = await sections.map(async section => {
      return await rootApi.getSection(section.category, section.slug);
    });

    await Promise.all(DATA_SECTIONS).then(value => {
      console.log(value);
      const tmp = value.map((data, index) => {
        return {
          ...sections[index],
          data,
        };
      });
      setDataSections(tmp);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(dataSections);
  }, [dataSections]);

  return (
    <View style={styles.screen}>
      {/* header */}
      <Animated.View
        style={[
          styles.headerContainer,
          {
            opacity,
            transform: [{translateY}],
          },
        ]}>
        <MyHeader
          leftAction={<LeftHeader />}
          rightAction={<RightHeader />}
          containerColor="transparent"
        />
      </Animated.View>

      <ScrollView
        style={styles.container}
        onScroll={e => {
          scrollY.setValue(Math.abs(e.nativeEvent.contentOffset.y));
        }}>
        {/* slide */}
        <Slides slides={slides} />

        {/* list container list horizontal */}
        <View style={{paddingHorizontal: 10}}>
          {dataSections.map((section, index) => (
            <ListMovieHorizotal
              key={`dataSection-key-${section.title}-${index}`}
              title={section.title}
              movies={section.data}
            />
          ))}
        </View>

        <Footer />
      </ScrollView>
    </View>
  );
};

const LeftHeader = () => {
  return (
    <View
      style={{
        height: '100%',
        aspectRatio: 1,
        padding: 10,
        overflow: 'hidden',
      }}>
      <Image
        style={{width: '100%', height: '100%', borderRadius: 100}}
        source={require('../../assets/images/mockLogo.png')}
      />
    </View>
  );
};

const RightHeader = () => {
  return (
    <TouchableOpacity
      style={{padding: 10}}
      onPress={() => console.log('navigate search screen')}>
      <Feather name="search" color="#fff" size={22} />
    </TouchableOpacity>
  );
};

export default HomeScreen;
